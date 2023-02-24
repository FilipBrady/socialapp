import { Box, Typography } from '@mui/material';
import PostContainer from '../components/PostContainer';
import { UserList } from '../data/UsersList';
import { useState } from 'react';
import ProfileFeedImage from '../components/ProfileFeedImage';
import ProfileOpenImage from '../components/ProfileOpenImage';
import { useParams } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { ref } from 'firebase/storage';

const ProfilPage = () => {
  const { auth, userPostData, userInfo } = useAppContainer();
  
  const { id } = useParams();
  return (
    <div className='ProfilePageContainer'>
      {userInfo &&
        userInfo.map(UserData => {
          if (UserData.userName === id) {
            return (
              <Box key={UserData.userId}>
                <div>
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
                        <Typography variant='body1'>
                          {UserData.userBio}
                        </Typography>
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
                  <div className='ProfileFeedContainer'>
                    {userPostData?.map(postDatas => {
                      if (postDatas.useruid === UserData.uid) {
                        return (
                          <Box>
                            <Box>
                              <ProfileFeedImage
                                postData={postDatas}
                                key={postDatas.postId}
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
