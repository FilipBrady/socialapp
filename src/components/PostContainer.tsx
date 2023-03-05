import { Box, Typography } from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../data/routes';
import { UserList } from '../data/UsersList';
import { useAppContainer } from './Context';
import PostCard from './PostCart';

type Props = {
  postData: DocumentData;
};

const PostContainer = ({ postData }: Props) => {
  const { auth, userPostData, userInfo, storage } = useAppContainer();

  const [imageSrcUrl, setImageSrcUrl] = useState('');
  const pathReference = ref(storage, `userProfilePictures/${postData.useruid}`);

  getDownloadURL(pathReference).then(url => {
    setImageSrcUrl(url);
  });
  return (
    <Box className='PostContainer'>
      {userInfo &&
        userInfo.map(UserData => {
          if (auth.currentUser?.uid !== UserData.uid) {
            if (postData.useruid === UserData.uid) {
              return (
                <>
                  {/* {UserData.userProfile.profilFeed.map(UserFeed => ( */}
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
                        src={imageSrcUrl}
                        alt={UserData.name}
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
                        <Link to={`${routes.profil}/${UserData.name}`}>
                          {UserData.name}
                        </Link>
                      </Typography>
                    </Box>
                    {UserData.uid === postData.useruid ? (
                      <PostCard
                        // imageSrcUrl={imageSrcUrl}
                        UserData={UserData}
                        key={UserData.userId}
                        postData={postData}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </>
              );
            }
          }
        })}
    </Box>
  );
};
export default PostContainer;
