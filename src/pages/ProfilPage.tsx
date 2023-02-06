import { Box, Typography } from '@mui/material';
import PostContainer from '../components/PostContainer';
import { UserList } from '../data/UsersList';

const ProfilPage = () => {
  return (
    <div className='ProfilePageContainer'>
      {UserList.map(UserData => {
        if (UserData.userId === 2) {
          return (
            <Box>
              <div className='ProfilePageUserInfo'>
                <Box sx={{ display: 'flex' }}>
                  <img
                    src={UserData.userProfilePic}
                    alt={UserData.userName}
                    className='ProfilePageUserPic'
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'baseline',
                      justifyContent: 'center',
                      maxWidth: '350px',
                    }}
                  >
                    <Typography
                      variant='h3'
                      sx={{
                        fontWeight: '600',
                        padding: 0.5,
                        paddingX: 0,
                        marginX: 1,
                      }}
                    >
                      {UserData.userName}
                    </Typography>
                    <Typography variant='body1'>{UserData.userBio}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ marginX: 1 }}>
                    <Typography variant='body1'>Followers</Typography>
                    <Typography variant='body1'>
                      {UserData.userProfile.followers}
                    </Typography>
                  </Box>
                  <Box sx={{ marginX: 1 }}>
                    <Typography variant='body1'>Following</Typography>
                    <Typography variant='body1'>
                      {UserData.userProfile.following}
                    </Typography>
                  </Box>
                </Box>
              </div>
              <div className='ProfileFeedBox'>
                {UserList.map(UserData => (
                  <>
                    {UserData.userProfile.profilFeed.map(UserFeed => (
                      <PostContainer UserData={UserData} UserFeed={UserFeed} />
                    ))}
                  </>
                ))}
              </div>
            </Box>
          );
        }
      })}
    </div>
  );
};
export default ProfilPage;
