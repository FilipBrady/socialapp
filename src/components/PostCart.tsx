import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import PostImage from '../Images/office.jpg';

type Props = {
  UserFeed: {
    postId: string;
    postImage: string;
    postDescription: string;
    postDate: string;
  };
};

const PostCard = ({ UserFeed }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedAnimation, setIsLikedAnimation] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const imageURL = 'https://picsum.photos/300/400';

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
      <Box key={UserFeed.postId}>
        <img
          src={UserFeed.postImage}
          alt={UserFeed.postDescription}
          style={{ width: '450px' }}
        />
        <Typography variant='body1'>{UserFeed.postDescription}</Typography>
        <Typography variant='body2'>{UserFeed.postDate}</Typography>
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
