import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';

const PullOutReason = () => {
  const [reason, setReason] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("No authentication token found.");
        }

        const response = await fetch("http://localhost:8000/api/v1/shopify/all-products-category", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched Categories:", result);

        const collections = result.data?.collections;
        if (collections && typeof collections === "object") {
          const categoriesArray = Object.entries(collections).flatMap(([key, items]) =>
            items.map(item => ({
              id: item.id,
              title: item.name || key,
            }))
          );

          setCategories(categoriesArray);
        } else {
          throw new Error("Invalid data format: 'collections' is not an object.");
        }

        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleReasonApply = () => {
    // Add logic for applying reason
    console.log("Selected Reason:", reason);
  };

  const handleCategoryApply = () => {
    // Add logic for applying category
    console.log("Selected Category:", category);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box mt={1}>
      <Card
        sx={{
          width: '96%',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          color="#344767"
          sx={{ fontFamily: 'sans-serif', fontSize: '18px', marginBottom: '20px', fontWeight: 'bold' }}
        >
          Pull out NeyX
        </Typography>
        <Grid container spacing={4}>
          {/* For All Products */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2">For All Products</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <TextField
                  select
                  fullWidth
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  SelectProps={{ native: true }}
                >
                  <option value="" disabled>
                    Reasons for pulling Out
                  </option>
                  <option value="Reason 1">Reason 1</option>
                  <option value="Reason 2">Reason 2</option>
                  <option value="Reason 3">Reason 3</option>
                </TextField>
                <Button
                  variant="contained"
                  onClick={handleReasonApply}
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#333',
                    },
                    height: '100%',
                    width: '120px',
                    padding: '16px',
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* For Selected Categories */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" color="#344767">For Selected Categories</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <TextField
                  select
                  fullWidth
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  SelectProps={{ native: true }}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </TextField>
                <Button
                  variant="contained"
                  onClick={handleCategoryApply}
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#333',
                    },
                    height: '130%',
                    width: '120px',
                    padding: '16px',
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default PullOutReason;