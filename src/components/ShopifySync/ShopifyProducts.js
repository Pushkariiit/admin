import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

function ShopifyProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/v1/shopify/all-products', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                        'Content-Type': 'application/json'
                    },
                });

                const data = await response.json();

                if (response.ok && data.statusCode === 200) {
                    setProducts(data.products);
                } else {
                    throw new Error(data.message || 'Failed to fetch products');
                }
            } catch (error) {
                console.error('Fetch products error:', error);
                setError(error.message || 'Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Shopify Products
            </Typography>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id}>
                        <ListItemText primary={product.title} secondary={product.variants[0].price} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ShopifyProducts;