import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import ProductCategories from '../Inventory/Cards/ProductCategories';
import BargainingPriceRange from '../Inventory/Cards/BargainingPriceRange';
import CategorySettings from '../Inventory/Cards/CategorySettings';
import PullOutReason from '../Inventory/Cards/PullOutReason';
import InventoryTable from '../Inventory/Cards/InventoryTable';

const Inventory = () => {
  return (
    <Box
      sx={{
        padding: '20px 42px', // Adds space on left and right
        margin: 0,
        marginTop: '64px',
        marginLeft: '191px', // Sidebar width adjustment
        backgroundColor: '#F5F6FA',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden', // Completely removes scrollbars
        width: 'calc(101vw - 229px)', // Adjust for sidebar and padding
        fontFamily: 'sans-serif' 
      }}
    >
      {/* Metric Cards */}
      <Grid container spacing={2} sx={{  fontFamily: ' sans-serif',fontWeight: 'bold',fontSize: '20px', marginBottom: '20px' }}>
        {['Total Available Products', 'Next Active Products', 'Next In-active Products', 'Total Available Products'].map(
          (metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s, color 0.3s',
                  '&:hover': {
                    backgroundColor: '#000',
                    '& .hover-text': {
                      color: '#fff', // Change text color on hover
                    },
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className="hover-text"
                    sx={{
                      transition: 'color 0.3s',
                    }}
                  >
                    {metric}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end', // Aligns to the right
                      marginTop: '10px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      className="hover-text"
                      sx={{
                        marginTop: '10px',
                        transition: 'color 0.3s',
                      }}
                    >
                      1000
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}> {/* Add spacing between sections */}

        {/* Product Categories Section */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "white" }}>
            <CardContent>
              <ProductCategories />
            </CardContent>
          </Card>
        </Grid>

        {/* Bargaining and Price Range Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <BargainingPriceRange />
            </CardContent>
          </Card>
        </Grid>
        {/*Setting Category */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <CategorySettings/>
            </CardContent>
          </Card>
        </Grid>
        {/* Pull Out NeyX Section */}
        <Grid item xs={12}>
          <PullOutReason />
        </Grid>

        {/* Inventory table section */}
        <Grid item xs={12} >
          <InventoryTable />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Inventory;


