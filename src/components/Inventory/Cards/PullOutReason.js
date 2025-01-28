import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const PullOutReason = () => {
  const [reason, setReason] = useState('');
  const [category, setCategory] = useState('');

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
          sx={{ fontFamily: ' sans-serif', fontSize: '18px', marginBottom: '20px', fontWeight: 'bold' }}
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
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                </TextField>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#333',
                    },
                    height: '100%', // Automatically adjust to match the TextField
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
                  <option value="Shoes">Shoes</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                </TextField>
                <Button
                  variant="contained"
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
