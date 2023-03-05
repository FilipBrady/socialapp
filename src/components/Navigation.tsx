import { Link } from 'react-router-dom';
import { routes } from '../data/routes';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/material';
import { useAppContainer } from './Context';

const Navigation = () => {
  const { auth } = useAppContainer();
  return (
    <nav>
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box>
          <Link to={routes.home} className='navLink'>
            <HomeIcon fontSize='large' />
          </Link>
          <Link to={routes.explore} className='navLink'>
            <ExploreIcon fontSize='large' />
          </Link>
          <Link to={routes.addPost} className='navLink'>
            <AddCircleOutlineIcon fontSize='large' />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={routes.myProfil} className='navLink'>
            <AccountCircleIcon fontSize='large' />
          </Link>
          {!auth.currentUser && (
            <button>
              <Link
                to={routes.logIn}
                style={{ color: 'black', textDecoration: 'none' }}
              >
                Log In
              </Link>
            </button>
          )}
          {auth.currentUser && (
            <button style={{ margin: '1px' }} onClick={() => auth.signOut()}>
              Sign Out
            </button>
          )}
        </Box>
      </Box>
    </nav>
  );
};
export default Navigation;
