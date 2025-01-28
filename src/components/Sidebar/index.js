// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Typography,
// } from '@mui/material';
// import PlansIcon from '@mui/icons-material/WorkspacePremium';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { SidebarContext } from './SidebarContext'; // Adjust the path if needed
// import Home from '../../assets/home 1.png';
// import Inventory from '../../assets/inventory.png';
// import Contact from '../../assets/contact.png';
// import Order from '../../assets/order.png';
// import Settings from '../../assets/settings.png';

// const Sidebar = () => {
//   const { setSelectedItem } = useContext(SidebarContext); // Access the context to update the selected item

//   const handleItemClick = (item) => {
//     setSelectedItem(item); // Update the selected item in the context
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{
//         '& .MuiDrawer-paper': {
//           width: '200px',
//           backgroundColor: '#3E3D45',
//           color: '#fff',
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         },
//       }}
//     >
//       <Box>
//         {/* Sidebar Header */}
//         <Typography

//           sx={{
//             color: '#fff',
//             textAlign: 'center',
//             padding: '20px 0',
//             fontWeight: 'bold',
//             fontFamily: 'sans-serif',
//             fontSize: '18px', // Set font size to 14px
//           }}
//         >
//           Bargenix
//         </Typography>
//         <Divider sx={{ backgroundColor: '#444' }} />

//         {/* Sidebar Menu List */}
//         <List
//           sx={{
//             paddingLeft: '16px', // Move the entire menu right
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start', // Default alignment for shifting right
//             width: '100%',
//           }}
//         >
//           {/* Home */}
//           <ListItem
//             button
//             component={Link}
//             to="/"
//             onClick={() => handleItemClick('Home')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <img
//               src={Home}
//               alt="icon"
//               style={{ color: '#fff', width: '24px', height: '24px' }}
//             />
//             <ListItemText
//               primary="Home"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px', // Set font size to 14px
//                 marginLeft: '8px', // Reduce space between icon and text
//               }}
//             />
//           </ListItem>

//           {/* Inventory */}
//           <ListItem
//             button
//             component={Link}
//             to="/inventory"
//             onClick={() => handleItemClick('Inventory')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <img
//               src={Inventory}
//               alt="icon"
//               style={{ color: '#fff', width: '24px', height: '24px' }}
//             />
//             <ListItemText
//               primary="Inventory"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',
//                 marginLeft: '8px', // Decrease space between icon and text
//               }}
//             />
//           </ListItem>

//           {/* Order */}
//           <ListItem
//             button
//             component={Link}
//             to="/order"
//             onClick={() => handleItemClick('Order')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <img
//               src={Order}
//               alt="icon"
//               style={{ color: '#fff', width: '24px', height: '24px' }}
//             />
//             <ListItemText
//               primary="Order"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',
//                 marginLeft: '8px', // Reduce space between icon and text
//               }}
//             />
//           </ListItem>

//           {/* Settings */}
//           <ListItem
//             button
//             component={Link}
//             to="/settings"
//             onClick={() => handleItemClick('Settings')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <img
//               src={Settings}
//               alt="icon"
//               style={{ color: '#fff', width: '24px', height: '24px' }}
//             />
//             <ListItemText
//               primary="Settings"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',
//                 marginLeft: '8px', // Reduce space between icon and text
//               }}
//             />
//           </ListItem>

//           {/* Plans */}
//           <ListItem
//             button
//             component={Link}
//             to="/plans"
//             onClick={() => handleItemClick('Plans')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <ListItemIcon sx={{ minWidth: '30px' }}>
//               <PlansIcon sx={{ color: '#fff', width: '28px', height: '28px' }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Plans"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',
//                 marginLeft: '8px', // Reduce space between icon and text
//               }}
//             />
//           </ListItem>

//           {/* Contact */}
//           <ListItem
//             button
//             component={Link}
//             to="/contact"
//             onClick={() => handleItemClick('Contact')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <img
//               src={Contact}
//               alt="icon"
//               style={{ color: '#fff', width: '24px', height: '24px' }}
//             />
//             <ListItemText
//               primary="Contact"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',
//                 marginLeft: '8px', // Reduce space between icon and text
//               }}
//             />
//           </ListItem>
//           <Divider sx={{ backgroundColor: '#444' }} />
//         </List>
//       </Box>


//       {/* Footer Section */}
//       <Box>
//         <List
//           sx={{
//             paddingLeft: '16px', // Move the entire menu right
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start', // Default alignment for shifting right
//             width: '100%',
//           }}>
//           <ListItem
//             button
//             onClick={() => handleItemClick('Log Out')}
//             sx={{
//               '&:hover': {
//                 backgroundColor: '#1976d2',
//               },
//               marginLeft: '-16px', // Extend hover effect to the edge on the left
//               marginRight: '-16px', // Extend hover effect to the edge on the right
//               paddingLeft: '32px', // Adjust padding to maintain text alignment
//               paddingRight: '16px',
//             }}
//           >
//             <ListItemIcon sx={{ minWidth: '30px' }}>
//               <ExitToAppIcon sx={{ color: '#fff', width: '24px', height: '24px' }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Log Out"
//               sx={{
//                 color: '#fff',
//                 fontFamily: ' sans-serif',
//                 fontSize: '14px',

//               }}
//             />
//           </ListItem>
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;




import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import PlansIcon from '@mui/icons-material/WorkspacePremium';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { SidebarContext } from './SidebarContext'; // Adjust the path if needed
import Home from '../../assets/home 1.png';
import Inventory from '../../assets/inventory.png';
import Contact from '../../assets/contact.png';
import Order from '../../assets/order.png';
import Settings from '../../assets/settings.png';
import axios from 'axios'; // Import axios for making API calls

const Sidebar = () => {
  const { setSelectedItem } = useContext(SidebarContext); // Access the context to update the selected item
  const navigate = useNavigate(); // Hook for navigation

  const handleItemClick = async (item) => {
    if (item === 'Log Out') {
      try {
        // Check if the user is authenticated (e.g., if there is a token)
        const token = localStorage.getItem('authToken'); // or check cookies, etc.

        const response = await fetch('/api/v1/users/signout', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Send token if needed
          },
          credentials: 'include', // Make sure cookies are sent with the request
        });

        if (!response.ok) {
          throw new Error('Logout failed');
        }

        // Clear local storage or any other state
        localStorage.removeItem('user');
        localStorage.removeItem('authToken'); // if you have an auth token

        // Navigate to login page
        navigate('/login');
      } catch (error) {
        console.error('Error during signout:', error);
      }
    } else {
      setSelectedItem(item);
    }
  };



  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          width: '200px',
          backgroundColor: '#3E3D45',
          color: '#fff',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        {/* Sidebar Header */}
        <Typography
          sx={{
            color: '#fff',
            textAlign: 'center',
            padding: '20px 0',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            fontSize: '18px', // Set font size to 14px
          }}
        >
          Bargenix
        </Typography>
        <Divider sx={{ backgroundColor: '#444' }} />

        {/* Sidebar Menu List */}
        <List
          sx={{
            paddingLeft: '16px', // Move the entire menu right
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Default alignment for shifting right
            width: '100%',
          }}
        >
          {/* Home */}
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => handleItemClick('Home')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <img
              src={Home}
              alt="icon"
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
            <ListItemText
              primary="Home"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px', // Set font size to 14px
                marginLeft: '8px', // Reduce space between icon and text
              }}
            />
          </ListItem>

          {/* Inventory */}
          <ListItem
            button
            component={Link}
            to="/inventory"
            onClick={() => handleItemClick('Inventory')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <img
              src={Inventory}
              alt="icon"
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
            <ListItemText
              primary="Inventory"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
                marginLeft: '8px', // Decrease space between icon and text
              }}
            />
          </ListItem>

          {/* Order */}
          <ListItem
            button
            component={Link}
            to="/order"
            onClick={() => handleItemClick('Order')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <img
              src={Order}
              alt="icon"
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
            <ListItemText
              primary="Order"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
                marginLeft: '8px', // Reduce space between icon and text
              }}
            />
          </ListItem>

          {/* Settings */}
          <ListItem
            button
            component={Link}
            to="/settings"
            onClick={() => handleItemClick('Settings')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <img
              src={Settings}
              alt="icon"
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
            <ListItemText
              primary="Settings"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
                marginLeft: '8px', // Reduce space between icon and text
              }}
            />
          </ListItem>

          {/* Plans */}
          <ListItem
            button
            component={Link}
            to="/plans"
            onClick={() => handleItemClick('Plans')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <ListItemIcon sx={{ minWidth: '30px' }}>
              <PlansIcon sx={{ color: '#fff', width: '28px', height: '28px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Plans"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
                marginLeft: '8px', // Reduce space between icon and text
              }}
            />
          </ListItem>

          {/* Contact */}
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={() => handleItemClick('Contact')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <img
              src={Contact}
              alt="icon"
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
            <ListItemText
              primary="Contact"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
                marginLeft: '8px', // Reduce space between icon and text
              }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444' }} />
        </List>
      </Box>

      {/* Footer Section */}
      <Box>
        <List
          sx={{
            paddingLeft: '16px', // Move the entire menu right
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Default alignment for shifting right
            width: '100%',
          }}>
          <ListItem
            button
            onClick={() => handleItemClick('Log Out')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
              marginLeft: '-16px', // Extend hover effect to the edge on the left
              marginRight: '-16px', // Extend hover effect to the edge on the right
              paddingLeft: '32px', // Adjust padding to maintain text alignment
              paddingRight: '16px',
            }}
          >
            <ListItemIcon sx={{ minWidth: '30px' }}>
              <ExitToAppIcon sx={{ color: '#fff', width: '24px', height: '24px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Log Out"
              sx={{
                color: '#fff',
                fontFamily: ' sans-serif',
                fontSize: '14px',
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;