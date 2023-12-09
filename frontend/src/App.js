import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; // Assuming you have a LoginForm component
import SignupForm from './components/SignupForm'; // Assuming you have a SignupForm component

import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';


const App = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormSwitch = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  return (
    <div style={{ textAlign: 'center',}}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">App</Typography>
         
          
        </Toolbar>
      </AppBar>
      {isLoginForm ? <LoginForm /> : <SignupForm />}
      <Button onClick={handleFormSwitch} >
        {isLoginForm ? 'Switch to Signup' : 'Switch to Login'}
      </Button>

    
    </div>
  );
};

export default App;