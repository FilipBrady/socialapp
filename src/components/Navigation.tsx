import { Link } from 'react-router-dom';
import { routes } from '../data/routes';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/material';

const Navigation = () => {
  return (
    <nav>
      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-around' }}>
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
        <Box>
          <Link to={routes.profil} className='navLink'>
            <AccountCircleIcon fontSize='large' />
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
export default Navigation;
