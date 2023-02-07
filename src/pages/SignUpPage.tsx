import { Box, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../data/routes';

const SignUpPage = () => {
  return (
    <div>
      <Box
        sx={{
          background: 'white',
          width: 'fit-content',
          margin: 'auto',
          padding: 3,
        }}
      >
        <Typography variant='h5' color='black'>
          Sign Up
        </Typography>
        <form className='LogInForm'>
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Repete your password' />
          <input type='email' placeholder='Email' />
          <input type='submit' />
        </form>
      </Box>
    </div>
  );
};
export default SignUpPage;