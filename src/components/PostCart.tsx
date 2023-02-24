import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import PostImage from '../Images/office.jpg';
import { DocumentData } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { userInfo } from 'os';
import { useAppContainer } from './Context';

type Props = {
  UserData: DocumentData;
  // imageSrcUrl: string;
  postData: DocumentData;

};

const PostCard = ({  UserData, postData }: Props) => {
  const { auth, userInfo, storage } = useAppContainer();

  const [isLiked, setIsLiked] = useState(false);
  const [isLikedAnimation, setIsLikedAnimation] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const imageURL = 'https://picsum.photos/300/400';
  const [imageSrcUrl, setImageSrcUrl] = useState('');

  const pathReference = ref(storage, `${postData.useruid}/${postData.postId}`);

  getDownloadURL(pathReference).then(url => {
    // // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // if (img !== null) {
    //   img.setAttribute('src', url);
    // }
    setImageSrcUrl(url);
  });

  useEffect(() => {
    const changeHeatrVisibility = setInterval(() => {
      setIsLikedAnimation(false);
    }, 1000);
    return () => {
      clearInterval(changeHeatrVisibility);
    };
  }, []);
  return (
    <div
      onDoubleClick={() => {
        setIsLiked(true);
        setIsLikedAnimation(true);
      }}
    >
      <div className={isLikedAnimation ? 'heartBox' : 'heartBoxHidden'}>
        <FavoriteIcon className='heart' sx={{ fontSize: '80px' }} />
      </div>
      <Box key={UserData.postId}>
        <img
          src={imageSrcUrl}
          alt={UserData.postDescription}
          style={{ width: '450px' }}
        />
        <Typography variant='body1'>{UserData.postDescription}</Typography>
        <Typography variant='body2'>{UserData.postDate}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: '4px 5px',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <div
            className='interactionPostBtn'
            onClick={() => {
              setIsLiked(!isLiked);
              isLiked ? setIsLikedAnimation(false) : setIsLikedAnimation(true);
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </div>
          <div className='interactionPostBtn'>
            <ChatBubbleOutlineIcon />
          </div>
          <div className='interactionPostBtn'>
            <ShareIcon />
          </div>
        </Box>
        <Box>
          <div
            className='interactionPostBtn'
            onClick={() => setIsSaved(!isSaved)}
          >
            {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
        </Box>
      </Box>
    </div>
  );
};
export default PostCard;
