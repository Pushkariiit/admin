import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ShirtIcon from '../../../assets/Group 814.png';

const ProductCategories = () => {
  const categories = [
    { title: 'Shirts', icon: ShirtIcon, totalProducts: 1000, activeProducts: 500 },
    { title: 'Pants', icon: ShirtIcon, totalProducts: 800, activeProducts: 400 },
    { title: 'Shoes', icon: ShirtIcon, totalProducts: 600, activeProducts: 300 },
    { title: 'Accessories', icon: ShirtIcon, totalProducts: 400, activeProducts: 200 },
    { title: 'Hats', icon: ShirtIcon, totalProducts: 300, activeProducts: 150 },
    { title: 'Jackets', icon: ShirtIcon, totalProducts: 200, activeProducts: 120 },
    { title: 'Bags', icon: ShirtIcon, totalProducts: 500, activeProducts: 250 },
    { title: 'Watches', icon: ShirtIcon, totalProducts: 700, activeProducts: 350 },
  ];

  return (
    <Box>
      <Typography variant="h6" color="#344767" sx={{fontFamily: ' sans-serif',fontWeight: 'bold',fontSize: '18px', marginBottom: '10px' }}>
        Product Category
      </Typography>
      <Grid container spacing={2}>
        {categories.slice(0, 8).map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                padding: '8px',
              }}
            >
              <CardContent>
                {/* Icon and Title Section */}
                <Box display="flex" alignItems="center" mb={2} gap={1}>
                  <img
                    src={category.icon}
                    alt={`${category.title} Icon`}
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <Typography variant="subtitle2" fontWeight="bold">
                    {category.title}
                  </Typography>
                </Box>

                {/* Total Products Section */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack elements vertically
                    alignItems: 'flex-end', // Align to the right
                    marginBottom: '2px',
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Total Products
                  </Typography>
                  <Typography variant="h6">{category.totalProducts}</Typography>
                </Box>

                {/* Divider Line */}
                <Box
                  sx={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    margin: '0',
                    width: 'calc(100% + 46px)', // Stretches beyond padding
                    position: 'relative',
                    left: '-24px', // Aligns to card edges
                  }}
                />

                {/* Active Products Section */}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "12px" }} // Increase the size of the overall text
                >
                  Active:
                  <span style={{ fontWeight: "bold", color: "black", fontSize: "14px" }}>
                    {category.activeProducts}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="contained" color="primary">
          View All Categories
        </Button>
      </Box>
    </Box>

  );
};

export default ProductCategories;
