import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginForm = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form>
        <TextField label="Username or Email" fullWidth margin="normal" required />
        <TextField label="Password" type="password" fullWidth margin="normal" required />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
