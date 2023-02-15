import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { routes } from '../data/routes';
import { useState } from 'react';

const LogInPage = () => {
  const { user, auth, db, logInWithEmailAndPassword, signInWithGoogle } = useAppContainer();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogInFormSubmit = (submitting: any) => {
    submitting.preventDefault();
    if (userEmail !== '' && userPassword !== '') {
      logInWithEmailAndPassword(userEmail, userPassword);
      setUserEmail('');
      setUserPassword('');
    }
  };

  return (
    <div>
        {auth.currentUser && <div>you are already Logged In!</div>}
      <Box
        sx={{
          background: 'white',
          width: 'fit-content',
          margin: 'auto',
          padding: 3,
        }}
      >
        <Typography variant='h5' color='black'>
          Log In
        </Typography>
        <form className='LogInForm' onSubmit={handleLogInFormSubmit}>
          <input
            type='text'
            placeholder='Email'
            value={userEmail}
            onChange={text => setUserEmail(text.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={userPassword}
            onChange={text => setUserPassword(text.target.value)}
          />
          <input type='submit' />
        </form>
        <button onClick={signInWithGoogle}>Log In with Google</button>
        <Typography variant='body2' color='black' sx={{ marginTop: 2 }}>
          You are not registered yet? {'  '}
          <Link to={routes.signUp} className='LogInSignUpLink'>
            Lets Sign Up!
          </Link>
        </Typography>
      </Box>
    </div>
  );
};
export default LogInPage;
