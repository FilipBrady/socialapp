import { Box, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../data/routes';

const LogInPage = () => {
  return (
    <div>
      <Box sx={{background: "white", width: "fit-content", margin: "auto", padding: 3}}>
        <Typography variant='h5' color='black'>Log In</Typography>
        <form className='LogInForm'>
          <input type='text' placeholder='Name' />
          <input type='password' placeholder='Password' />
          <input type='submit' />
        </form>
        <Typography variant='body2' color='black' sx={{marginTop: 2}}>
          You are not registered yet? 
          <Link to={routes.signUp}>
          Lets Sign Up!
          </Link> 
        </Typography>
      </Box>
    </div>
  );
};
export default LogInPage;
