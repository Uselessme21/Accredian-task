import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const SignUpForm = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center">
        Sign Up
      </Typography>
      <form>
        <TextField label="Username" fullWidth margin="normal" required />
        <TextField label="Email" type="email" fullWidth margin="normal" required />
        <TextField label="Password" type="password" fullWidth margin="normal" required />
        <TextField label="Confirm Password" type="password" fullWidth margin="normal" required />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
