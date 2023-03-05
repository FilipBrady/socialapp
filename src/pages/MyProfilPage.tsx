import { Box, Typography } from '@mui/material';
import PostContainer from '../components/PostContainer';
import { UserList } from '../data/UsersList';
import { useState } from 'react';
import MyProfileFeedImage from '../components/MyProfileFeedImage';
import ProfileOpenImage from '../components/ProfileOpenImage';
import { useParams } from 'react-router-dom';
import { useAppContainer } from '../components/Context';
import { getDownloadURL, ref } from 'firebase/storage';
import AddUserInfo from '../components/AddUserInfo';

const MyProfilPage = () => {
  const { auth, userInfo, userPostData, storage } = useAppContainer();
  const [isManagingProfile, setIsManagingProfile] = useState(false);
  const [imageSrcUrl, setImageSrcUrl] = useState('');
  const pathReference = ref(
    storage,
    `userProfilePictures/${auth.currentUser?.uid}`
  );

  getDownloadURL(pathReference).then(url => {
    // // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // if (img !== null) {
    //   img.setAttribute('src', url);
    // }
    setImageSrcUrl(url);
  });
  return (
    <div className='ProfilePageContainer'>
      {auth.currentUser ? (
        userInfo &&
        userInfo.map(UserData => {
          if (UserData.email === auth.currentUser?.email) {
            return (
              <Box key={UserData.userId}>
                <div className='ProfilePageUserInfo'>
                  <Box sx={{ display: 'flex' }}>
                    <img
                      src={imageSrcUrl}
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
                  <Box>
                    <button
                      style={{
                        border: '.5px solid #cecece',
                        cursor: 'pointer',
                      }}
                      onClick={() => setIsManagingProfile(true)}
                    >
                      Manage My Profile
                    </button>
                  </Box>
                  {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                  </Box> */}
                </div>
                <div className='ProfileFeedContainer'>
                  {userPostData?.map(postDatas => {
                    if (postDatas.useruid === UserData.uid) {
                      return (
                        <Box>
                          <Box>
                            <MyProfileFeedImage
                              postData={postDatas}
                              key={postDatas.postId}
                            />
                          </Box>
                        </Box>
                      );
                    }
                  })}
                </div>
                <div className={isManagingProfile ? "ManagingProfile" : "DisplayNone"} >
                  <AddUserInfo setIsManagingProfile={setIsManagingProfile} />
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
