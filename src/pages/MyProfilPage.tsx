import { Box, Typography } from '@mui/material';
import PostContainer from '../components/PostContainer';
import { UserList } from '../data/UsersList';
import { useState } from 'react';
import ProfileFeedImage from '../components/ProfileFeedImage';
import ProfileOpenImage from '../components/ProfileOpenImage';
import { useParams } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { getDownloadURL, ref } from 'firebase/storage';

const MyProfilPage = () => {
  const { auth, userInfo, userPostData, storage } = useAppContainer();
  console.log(auth.currentUser?.email);


  const { id } = useParams();
  return (
    <div className='ProfilePageContainer'>
      {auth.currentUser ? (
        userInfo &&
        userInfo.map(UserData => {
          if (UserData.name === auth.currentUser?.displayName) {
            return (
              <Box key={UserData.userId}>
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
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ marginX: 1 }}>
                      <Typography variant='body1'>Followers</Typography>
                      <Typography variant='body1'>
                        {UserData.followers}
                      </Typography>
                    </Box>
                    <Box sx={{ marginX: 1 }}>
                      <Typography variant='body1'>Following</Typography>
                      <Typography variant='body1'>
                        {UserData.following}
                      </Typography>
                    </Box>
                  </Box>
                </div>
                <div className='ProfileFeedContainer'>
                  {userPostData?.map(postDatas => {
                    if (postDatas.useruid === UserData.uid) {
                      console.log(postDatas);
                      console.log(typeof postDatas);

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
              </Box>
            );
          }
        })
      ) : (
        <div>Try Log In</div>
      )}
    </div>
  );
};
export default MyProfilPage;
