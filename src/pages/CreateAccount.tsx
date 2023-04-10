import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Header from '../comps/Header'
import { ErrorSharp, Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';
import { useFormik } from 'formik';


interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const initialValues = {
  email: '',
  password: ''
}

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if(values.password.length < 10) {
    errors.password = 'Password needs to be at least 10 characters long.';
  }

  return errors
}

const submitData = () => {
  // pass
}

const CreateAccount = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,
    onSubmit: submitData
  })

  return (
    <Container
      maxWidth="md"
      sx={{ justifySelf:"center" }}
    >
      <Header 
        title="Want to create a new account?"
        subtitle="Insert the following data to create an account."
      />
      <FormControl fullWidth sx={{ mb:2 }}>
        <TextField
          id="outlined-email"
          label="Email"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button>
        
      </Button>
    </Container>
  );
}
 
export default CreateAccount;