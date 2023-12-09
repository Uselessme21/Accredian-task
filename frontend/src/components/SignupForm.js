import React,{useState} from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from '../services/api';
const SignUpForm = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const userData = { username, email, password };
    
    const { success, data, error } = await api.signupUser(userData);

    if (success) {
    
      alert('Signup Successful'); 
    } else {
      
      alert(`Signup Failed: ${error}`);
    }
  };


  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center">
        Sign Up
      </Typography>
      <form>
        <TextField label="Username" fullWidth margin="normal"  value={username}
        onChange={(e) => setUsername(e.target.value)} required />
        <TextField label="Email" type="email" fullWidth margin="normal" value={email}
        onChange={(e) => setEmail(e.target.value)} required />
        <TextField label="Password" type="password" fullWidth margin="normal"  value={password}
        onChange={(e) => setPassword(e.target.value)} required />
        <Button variant="contained" color="primary" fullWidth type="submit" onClick={handleSignup} >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
