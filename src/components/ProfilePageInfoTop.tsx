import { Box, Typography } from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { useAppContainer } from './Context';

type Props = {
  UserData: DocumentData;
};

const ProfilePageInfoTop = ({ UserData }: Props) => {
  const { auth, userPostData, userInfo, storage } = useAppContainer();

  const [imageSrcUrl, setImageSrcUrl] = useState('');
  const pathReference = ref(storage, `userProfilePictures/${UserData.uid}`);

  getDownloadURL(pathReference).then(url => {
    setImageSrcUrl(url);
  });
  return (
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
        <Typography variant='body1'>{UserData.userBio}</Typography>
      </Box>
    </Box>
  );
};
export default ProfilePageInfoTop;
