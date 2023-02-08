import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ProfileOpenImage from './ProfileOpenImage';

type Props = {
  UserFeed: {
    postId: string;
    postImage: string;
    postDescription: string;
    postDate: string;
    postLikes: {
      userId: number;
      userName: string;
    }[];
    postComments: {
      userId: number;
      commentId: string;
      userName: string;
      userComment: string;
    }[];
  };
};

const ProfileFeedImage = ({ UserFeed }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const [isPostClicked, setIsPostClicked] = useState(false);
  console.log(isPostClicked);
  return (
    <div>
      <div
        className='ProfileFeedBox'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPostClicked(true)}
      >
        <img
          key={UserFeed.postId}
          className='ProfileFeedImage'
          src={UserFeed.postImage}
          alt={UserFeed.postDescription}
        />
        <div className={isHovered ? 'ProfilImageHoverInfoBox' : 'DisplayNone'}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginX: 1,
            }}
          >
            <Typography variant='h6' sx={{ lineHeight: 0.8 }}>
              25
            </Typography>

            <div className='ProfilImageHoverInfoIcon'>
              <FavoriteIcon sx={{ color: 'black', fontSize: 35 }} />
            </div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginX: 1,
            }}
          >
            <Typography variant='h6' sx={{ lineHeight: 0.8 }}>
              15
            </Typography>
            <div className='ProfilImageHoverInfoIcon'>
              <ChatBubbleIcon sx={{ color: 'black', fontSize: 35 }} />
            </div>
          </Box>
        </div>
      </div>
      <div className={isPostClicked ? '' : 'DisplayNone'}>
        <ProfileOpenImage
          // UserData={UserData}
          UserFeed={UserFeed}
          setIsPostClicked={setIsPostClicked}
        />
      </div>
    </div>
  );
};
export default ProfileFeedImage;
