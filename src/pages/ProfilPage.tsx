import { Box, Typography } from '@mui/material';
import PostContainer from '../components/PostContainer';
import { UserList } from '../data/UsersList';
import { useState } from 'react';
import UserProfileFeedImage from '../components/UserProfileFeedImage';
import ProfileOpenImage from '../components/ProfileOpenImage';
import { useParams } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { ref } from 'firebase/storage';

const ProfilPage = () => {
  const { auth, userPostData, userInfo } = useAppContainer();

  const { id } = useParams();
  console.log(id);

  return (
    <div className='ProfilePageContainer'>
      {userInfo &&
        userInfo.map(UserData => {
          if (UserData.name === id) {
            return (
              <Box key={UserData.userId}>
                <div>
                  <div className='ProfilePageUserInfo'>
                    <Box sx={{ display: 'flex' }}>
                      <img
                        src={UserData.photoURL}
                        alt={UserData.name}
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
                          {UserData.name}
                        </Typography>
                        <Typography variant='body1'>
                          {UserData.userBio}
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                    </Box> */}
                  </div>
                  <div className='ProfileFeedContainer'>
                    {userPostData?.map(postData => {
                      if (postData.useruid === UserData.uid) {
                        return (
                          <Box>
                            <Box>
                              <UserProfileFeedImage
                                UserData={UserData}
                                postData={postData}
                                key={postData.postId}
                              />
                            </Box>
                          </Box>
                        );
                      }
                    })}
                  </div>
                </div>
              </Box>
            );
          }
        })}
    </div>
  );
};
export default ProfilPage;
