import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import { Snackbar, Alert } from '@mui/material'; // Importing Snackbar and Alert for notifications

const providers = [{ id: 'credentials', name: 'Email and password' }];

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const email = formData?.get('email');
      const password = formData?.get('password');
      
      // Mock sign-in logic: Assuming email: 'user@example.com' and password: 'password123'
      if (email === 'pn@123gmail.com' && password === 'password123') {
        resolve({ type: 'CredentialsSignin', error: null }); 
      } else {
        resolve({
          type: 'CredentialsSignin',
          error: 'Invalid credentials.', 
        });
      }
    }, 300);
  });
  return promise;
};

export default function NotificationsSignInPageError() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); // Snackbar visibility state
  const [message, setMessage] = React.useState(''); // Message to show
  const [severity, setSeverity] = React.useState('success'); // Severity of the message (success or error)

  // Handle login attempt
  const handleSignIn = async (provider, formData) => {
    const result = await signIn(provider, formData);
    if (result.error) {
      setMessage('Invalid email or password.');
      setSeverity('error');
    } else {
      setMessage('Successfully logged in!');
      setSeverity('success');
    }
    setOpen(true); // Show the Snackbar
  };

  // Handle Snackbar close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <AppProvider theme={theme}>
      {/* SignInPage component */}
      <SignInPage signIn={handleSignIn} providers={providers} />

      {/* Snackbar for success/error message */}
      <Snackbar
        open={open}
        autoHideDuration={6000} // Automatically hide after 6 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Display at the top-center
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </AppProvider>
  );
}
