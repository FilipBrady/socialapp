import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';

const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const imageURL = 'https://picsum.photos/300/400';

  return (
    <div className='PostCart' onDoubleClick={() => setIsLiked(true)}>
      <h1>BoB</h1>
      <img src={imageURL} alt="BoB" />
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
            onClick={() => setIsLiked(!isLiked)}
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
