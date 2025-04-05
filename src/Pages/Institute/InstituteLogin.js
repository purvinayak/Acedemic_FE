import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';


const providers = [{ id: 'credentials', name: 'Email and Password' }];



const signIn = async (provider, formData) => {
    console.log(provider)
    console.log(formData)
  
  const promise = new Promise((resolve) => {
    setTimeout(() => {
 
    console.log(`Signing in with  "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`)
      resolve();
    }, 300);
  });
  return promise;
};

export default function CredentialsSignInPage() {

  const theme = useTheme();
  return (
    // preview-start
  <>
  <h3>Institute Login</h3>
    <AppProvider theme={theme}>
    <h3 style={{marginTop:"10%",marginLeft:"40%" }}>Institute Login</h3>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  
    </>
  );
}
