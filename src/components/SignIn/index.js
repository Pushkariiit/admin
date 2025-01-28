// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Box,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import BgImg from '../../assets/image-illustrator.png';

// const Background = styled(Box)(({ theme }) => ({
//   backgroundImage: `url(${BgImg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const LoginContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: '#ffffff',
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//   maxWidth: 400,
//   width: '100%',
// }));

// const LoginButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#d81b60',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#ad1457',
//   },
// }));

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/users/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Correctly access the role field
//         const userRole = data.message?.user?.role;

//         if (!userRole) {
//           console.error('Role is missing in the response:', data);
//           alert('An error occurred: User role is missing.');
//           return;
//         }

//         // Navigate based on the role
//         if (userRole === 'ADMIN') {
//           window.location.href = 'https://warm-creponne-1b2c4c.netlify.app/';
//         } else {
//           localStorage.setItem('authToken', data.data.accessToken);
//           navigate('/');
//         }
//       } else {
//         alert(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };


//   return (
//     <Background>
//       <LoginContainer>
//         <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
//           NeyX Dashboard Log In
//         </Typography>
//         <Typography variant="body2" textAlign="center" mb={3}>
//           Enter your email and password to Sign In
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Current password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//               }
//               label="Remember me"
//             />
//             <Typography
//               variant="body2"
//               color="primary"
//               sx={{ cursor: 'pointer', textDecoration: 'underline' }}
//               onClick={() => alert('Forgot password functionality!')}
//             >
//               Forgot the password?
//             </Typography>
//           </Box>
//           <LoginButton
//             fullWidth
//             variant="contained"
//             size="large"
//             sx={{ mt: 3 }}
//             onClick={handleLogin}
//           >
//             Sign In
//           </LoginButton>
//           {/* Register Link */}
//           <Typography
//             variant="body2"
//             textAlign="center"
//             mt={2}
//             sx={{ cursor: 'pointer', textDecoration: 'underline', color: '#1976d2' }}
//             onClick={() => navigate('/signup')} // Navigate to signup page
//           >
//             Don't have an account? Register
//           </Typography>
//         </Box>
//       </LoginContainer>
//     </Background>
//   );
// }

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Box,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import BgImg from '../../assets/image-illustrator.png';

// const Background = styled(Box)(({ theme }) => ({
//   backgroundImage: `url(${BgImg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const LoginContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: '#ffffff',
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//   maxWidth: 400,
//   width: '100%',
// }));

// const LoginButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#d81b60',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#ad1457',
//   },
// }));

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/users/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Correctly access the role field
//         const userRole = data.message?.user?.role;

//         if (!userRole) {
//           console.error('Role is missing in the response:', data);
//           alert('An error occurred: User role is missing.');
//           return;
//         }

//         // Navigate based on the role
//         if (userRole === 'ADMIN') {
//           window.location.href = 'https://warm-creponne-1b2c4c.netlify.app/';
//         } else {
//           localStorage.setItem('authToken', data.data.accessToken);
//           navigate('/');
//         }
//       } else {
//         alert(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <Background>
//       <LoginContainer>
//         <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
//           NeyX Dashboard Log In
//         </Typography>
//         <Typography variant="body2" textAlign="center" mb={3}>
//           Enter your email and password to Sign In
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Current password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//               }
//               label="Remember me"
//             />
//             <Typography
//               variant="body2"
//               color="primary"
//               sx={{ cursor: 'pointer', textDecoration: 'underline' }}
//               onClick={() => alert('Forgot password functionality!')}
//             >
//               Forgot the password?
//             </Typography>
//           </Box>
//           <LoginButton
//             fullWidth
//             variant="contained"
//             size="large"
//             sx={{ mt: 3 }}
//             onClick={handleLogin}
//           >
//             Sign In
//           </LoginButton>
//           {/* Register Link */}
//           <Typography
//             variant="body2"
//             textAlign="center"
//             mt={2}
//             sx={{ cursor: 'pointer', textDecoration: 'underline', color: '#1976d2' }}
//             onClick={() => navigate('/signup')} // Navigate to signup page
//           >
//             Don't have an account? Register
//           </Typography>
//         </Box>
//       </LoginContainer>
//     </Background>
//   );
// }

// export default LoginPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Box,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import BgImg from '../../assets/image-illustrator.png';

// const Background = styled(Box)(({ theme }) => ({
//   backgroundImage: `url(${BgImg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   width: '100vw',
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const LoginContainer = styled(Box)(({ theme }) => ({
//   backgroundColor: '#ffffff',
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//   maxWidth: 400,
//   width: '100%',
// }));

// const LoginButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#d81b60',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#ad1457',
//   },
// }));

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if token exists in localStorage
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       navigate('/'); // Redirect to the homepage if already logged in
//     }
//   }, [navigate]);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/users/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Correctly access the role field
//         const userRole = data.message?.user?.role;

//         if (!userRole) {
//           console.error('Role is missing in the response:', data);
//           alert('An error occurred: User role is missing.');
//           return;
//         }

//         // Store the token in localStorage
//         localStorage.setItem('authToken', data.data.accessToken);

//         // Navigate based on the role
//         if (userRole === 'ADMIN') {
//           window.location.href = 'https://warm-creponne-1b2c4c.netlify.app/';
//         } else {
//           navigate('/');
//         }
//       } else {
//         alert(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <Background>
//       <LoginContainer>
//         <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
//           NeyX Dashboard Log In
//         </Typography>
//         <Typography variant="body2" textAlign="center" mb={3}>
//           Enter your email and password to Sign In
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             label="Current password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//               }
//               label="Remember me"
//             />
//             <Typography
//               variant="body2"
//               color="primary"
//               sx={{ cursor: 'pointer', textDecoration: 'underline' }}
//               onClick={() => alert('Forgot password functionality!')}
//             >
//               Forgot the password?
//             </Typography>
//           </Box>
//           <LoginButton
//             fullWidth
//             variant="contained"
//             size="large"
//             sx={{ mt: 3 }}
//             onClick={handleLogin}
//           >
//             Sign In
//           </LoginButton>
//           {/* Register Link */}
//           <Typography
//             variant="body2"
//             textAlign="center"
//             mt={2}
//             sx={{ cursor: 'pointer', textDecoration: 'underline', color: '#1976d2' }}
//             onClick={() => navigate('/signup')} // Navigate to signup page
//           >
//             Don't have an account? Register
//           </Typography>
//         </Box>
//       </LoginContainer>
//     </Background>
//   );
// }

// export default LoginPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import BgImg from '../../assets/image-illustrator.png';

const Background = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LoginContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: 400,
  width: '100%',
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#d81b60',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#ad1457',
  },
}));

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      // Check if sync is complete
      const syncComplete = localStorage.getItem('syncComplete');
      // Redirect to appropriate page based on sync status
      navigate(syncComplete ? '/' : '/shopify-sync');
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('http://localhost:8000/api/v1/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Correctly access the role field
        const userRole = data.message?.user?.role;

        if (!userRole) {
          console.error('Role is missing in the response:', data);
          alert('An error occurred: User role is missing.');
          return;
        }

        // Store the token in localStorage
        localStorage.setItem('authToken', data.data.accessToken);
        // Clear any existing sync status
        localStorage.removeItem('syncComplete');

        // Navigate based on the role
        if (userRole === 'ADMIN') {
          window.location.href = 'https://warm-creponne-1b2c4c.netlify.app/';
        } else {
          // For non-admin users, redirect to shopify sync page
          navigate('/shopify-sync');
        }
      } else {
        alert(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <LoginContainer>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          NeyX Dashboard Log In
        </Typography>
        <Typography variant="body2" textAlign="center" mb={3}>
          Enter your email and password to Sign In
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Current password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => alert('Forgot password functionality!')}
            >
              Forgot the password?
            </Typography>
          </Box>
          <LoginButton
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </LoginButton>
          {/* Register Link */}
          <Typography
            variant="body2"
            textAlign="center"
            mt={2}
            sx={{ cursor: 'pointer', textDecoration: 'underline', color: '#1976d2' }}
            onClick={() => navigate('/signup')}
          >
            Don't have an account? Register
          </Typography>
        </Box>
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;