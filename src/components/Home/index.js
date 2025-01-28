import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import ProductUsageChart from '../Home/Charts/ProductUsageChart.js.js';
import ProfitsChart from '../Home/Charts/ProfitsChart.js';
import PieChart from '../Home/Charts/PieChart.js';
import SimpleMap from '../Home/Charts/Simplemap.js';
import UserUsageChart from '../Home/Charts/UserUsage.js';
import { BarChart as BarChartIcon, Person } from '@mui/icons-material';
import Bar from '../../assets/bar.png';
import Profit from '../../assets/profit.png';
import Users from '../../assets/users.png';
import Truck from '../../assets/chartTimeline.png';
import PieIcon from '../../assets/pi.png';


const Dashboard = () => {
  return (
    <Box
      sx={{
        padding: '20px 42px',
        margin: 0,
        marginTop: '64px',
        marginLeft: '191px',
        backgroundColor: '#F5F6FA',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: 'calc(101vw - 229px)',
        fontFamily: 'Roboto',
      }}
    >
      <Grid container spacing={3}>
        {/* Metric Cards */}
        {[
          { title: 'Total Orders', value: '281', change: '+55%', icon: <Person /> },
          { title: 'Bot Orders', value: '281', change: '-55%', icon: <BarChartIcon /> },
          { title: 'Ongoing Conversations', value: '281', change: '+55%', icon: <Person /> },
          { title: 'Cancelled Orders', value: '281', change: '+55%', icon: <Person /> },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '12px',
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent sx={{ padding: '8px !important' }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.title}
                </Typography>
                <Box sx={{ marginTop: '4px', marginBottom: '8px' }}>
                  <Typography variant="h5" fontWeight="bold">
                    {item.value}
                  </Typography>
                  {/* Full-width border line */}
                  <Box
                    sx={{
                      width: 'calc(110% + 22px)', // Account for the card's padding
                      marginLeft: '-20px', // Offset to align with card edges
                      marginTop: '4px',
                      height: '1px',
                      backgroundColor: '#d3d3d3',
                    }}
                  />
                </Box>
                <Typography variant="caption" fontWeight="bold" sx={{ fontSize: '16px' }}>
                  <Box component="span" sx={{ color: item.change.startsWith('+') ? 'green' : 'red' }}>
                    {item.change}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 'normal',
                      fontSize: '12px',
                    }}
                  >
                    {' '}
                    than last week
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Product Usage */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '14px',
              minHeight: '350px', // Match height to other cards
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={Bar}
                    alt="Product Icon"
                    style={{
                      width: '34px',
                      height: '34px',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      display: 'block',
                      backgroundColor: '#E23571',
                    }}
                  />
                  <Typography color="#344767" sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
                    Product Usage
                  </Typography>
                </Box>
                <Select defaultValue="Daily" size="small">
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Yearly">Yearly</MenuItem>
                </Select>
              </Box>
              <ProductUsageChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Profits */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '14px',
              minHeight: '350px', // Match height to other cards
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={Profit}
                    alt="Profit Icon"
                    style={{
                      width: '16px',
                      height: '16px',
                      objectFit: 'contain',
                      padding: '8px',
                      borderRadius: '4px',
                      display: 'block',
                      backgroundColor: '#000000',
                    }}
                  />
                  <Typography color="#344767" sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
                    Profits
                  </Typography>
                </Box>
                <Select defaultValue="Daily" size="small">
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Yearly">Yearly</MenuItem>
                </Select>
              </Box>
              <ProfitsChart />
            </CardContent>
          </Card>
        </Grid>

        {/* User Usage Chart - Inserted Here */}
        <Grid item xs={12}>
          <Card
            sx={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              width: '100%',
              boxSizing: 'border-box',
              height: '350px', // Set fixed height for the card
            }}
          >
            <CardContent sx={{ padding: '8px', height: '100%' }}>
              {/* Title and Select Dropdown */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between', // Space out title and dropdown
                  alignItems: 'center',
                  paddingLeft: '4px',
                  marginBottom: '8px', // Add spacing below title
                }}
              >
                {/* Title with Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px', // Space between icon and text
                  }}
                >
                  <img
                    src={Users}
                    alt="Usage Icon"
                    style={{
                      width: '20px',
                      height: '20px',
                      display: 'block',
                      padding: '6px',
                      borderRadius: '4px',
                      backgroundColor: '#1E78E9',
                    }}
                  />
                  <Typography color="#344767" sx={{ fontFamily: ' sans-serif', fontWeight: 'bold', fontSize: '16px' }} >
                    User Usage
                    <Box
                      component="span"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '14px',
                        display: 'block', // Ensures it appears on a new line
                      }}
                    >
                      {' '}
                      480
                    </Box>
                  </Typography>
                </Box>

                {/* Dropdown Menu */}
                <Select defaultValue="Daily" size="small" sx={{ minWidth: '100px' }}>
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="Yearly">Yearly</MenuItem>
                </Select>
              </Box>

              {/* Chart Section */}
              <Box
                sx={{
                  width: '100%',
                  height: 'calc(100% - 70px)', // Adjusted to leave space for Typography
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '4px',
                  paddingBottom: '10px', // Ensure space below the chart
                  boxSizing: 'border-box',
                }}
              >
                <UserUsageChart />
              </Box>

              {/* Centered Time Typography */}
              <Box
                sx={{
                  textAlign: 'center', // Center align the text
                  marginTop: '-6px',

                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    fontSize: '0.8rem',
                    color: '#344767',
                  }}
                >
                  Time (April 15th)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Charts */}
        <Grid item xs={12} md={6}>
          <PieChart
            title="Bargaining vs Checkout"
            type="bargaining"
            imgSrc={PieIcon}
            style={{
              backgroundColor: '#2D89E6',
              width: '30px',
              height: '30px',
            }}

          />
        </Grid>

        <Grid item xs={12} md={6}>
          <PieChart
            title="Bot Inventory Analytics Insights"
            type="inventory"
            imgSrc={Truck}
            style={{
              backgroundColor: '#000000',
              width: '30px',
              height: '30px',
            }}

          />
        </Grid>

        {/* World Map Insights */}
        <Grid item xs={12} >
          <SimpleMap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

