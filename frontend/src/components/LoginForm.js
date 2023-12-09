import React, {useState} from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from '../services/api';
const LoginForm = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const userData = { email, password };
    
    const { success, data, error } = await api.loginUser(userData);

    if (success) {
   
      alert('Login Successful');
    } else {
      
      alert(`Login Failed: ${error}`); 
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center">
        Login
      </Typography>
      <form>
        <TextField label="Username or Email" fullWidth margin="normal"  type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required />
        <TextField label="Password" type="password" fullWidth margin="normal"  value={password}
        onChange={(e) => setPassword(e.target.value)} required />
        <Button variant="contained" color="primary" fullWidth type="submit" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
