import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../data/routes';
import { UserList } from '../data/UsersList';
import PostCard from './PostCart';

const PostContainer = () => {
  return (
    <Box className='PostContainer'>
      {UserList.map(UserData => (
        <>
          {UserData.userProfile.profilFeed.map(UserFeed => (
            <div className='PostCart'>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginY: 1,
                  marginLeft: 1,
                }}
              >
                <img
                  src={UserData.userProfilePic}
                  alt={UserData.userName}
                  className='UserProfilePicPost'
                />
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: '600',
                    padding: 0.5,
                    paddingX: 0,
                    marginX: 1,
                  }}
                >
                  <Link to={`${routes.profil}/${UserData.userName}`}>
                  {UserData.userName}
                  </Link>
                </Typography>
              </Box>
              <PostCard UserFeed={UserFeed} key={UserData.userId} />
            </div>
          ))}
        </>
      ))}
    </Box>
  );
};
export default PostContainer;
