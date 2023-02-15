import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { routes } from '../data/routes';

const SignUpPage = () => {
  const { user, auth, db, signInWithGoogle, registerWithEmailAndPassword } =
    useAppContainer();
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [repeteUserPassword, setRepeteUserPassword] = useState('');

  const handlesignInFormSubmit = (submitting: any) => {
    submitting.preventDefault();
    if (
      newUserPassword === repeteUserPassword &&
      newUserName !== '' &&
      newUserEmail !== ''
    ) {
      registerWithEmailAndPassword(newUserName, newUserEmail, newUserPassword);
      setNewUserEmail('');
      setNewUserName('');
      setNewUserPassword('');
      setRepeteUserPassword('');
    }
  };

  return (
    <div>
      {auth.currentUser && <div>you are already Signed In!</div>}

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
        <form className='LogInForm' onSubmit={handlesignInFormSubmit}>
          <input
            type='text'
            placeholder='Name'
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={newUserPassword}
            onChange={e => setNewUserPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Repete your password'
            value={repeteUserPassword}
            onChange={e => setRepeteUserPassword(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            value={newUserEmail}
            onChange={e => setNewUserEmail(e.target.value)}
          />
          <input type='submit' />
        </form>
        <button onClick={signInWithGoogle}>Sign Up with Google</button>
        <Typography variant='body2' color='black' sx={{ marginTop: 2 }}>
          You already have a profile? Just {'  '}
          <Link to={routes.logIn} className='LogInSignUpLink'>
            Log in!
          </Link>
        </Typography>
      </Box>
    </div>
  );
};
export default SignUpPage;
