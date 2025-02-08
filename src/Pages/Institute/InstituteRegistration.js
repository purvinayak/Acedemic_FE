import '../../Styles/Registration.css';
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Box } from '@mui/material';

// import Register from './Register.png'; // Import the uploaded image
import { AccountCircle, Phone, Email, Lock } from '@mui/icons-material';

const InstituteRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (


    <Grid container className="container" justifyContent="center" alignItems="center">
     
       


      <Grid item xs={8} md={4}>
        <Paper className="form-box" sx={{paddingTop:"11px"}}>
          <Typography variant="h4" gutterBottom >
            Register Now
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
            
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={formData.username}
              onChange={handleChange}
              margin="normal"

              InputProps={{
                startAdornment: <AccountCircle className="input-icon" />, // Add icon
              }}
              className="custom-textfield" /* Custom class for unique style */
          
            />
            <TextField
              name="mobile"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              value={formData.mobile}
              onChange={handleChange}
              margin="normal"

              InputProps={{
                startAdornment: <Phone className="input-icon" />,
              }}
              className="custom-textfield"
            />
            <TextField
              name="email"
              label="Your Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              margin="normal"

              InputProps={{
                startAdornment: <Email className="input-icon" />,
              }}
              className="custom-textfield"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              margin="normal"

              InputProps={{
                startAdornment: <Lock className="input-icon" />,
              }}
              className="custom-textfield"
            />
            <Button variant="contained" color="primary" type="submit" sx={{paddingTop:"7px",marginTop:"7px"}} className="register-button"  >
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InstituteRegistration;