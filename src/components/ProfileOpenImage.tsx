// import { UserList } from '../data/UsersList';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import { DocumentData, Timestamp } from 'firebase/firestore';

type Props = {
  setIsPostClicked: React.Dispatch<React.SetStateAction<boolean>>;
  // UserFeed: {
  //   postId: string;
  //   postImage: string;
  //   postDescription: string;
  //   postDate: string;
  //   postLikes: {
  //     userId: number;
  //     userName: string;
  //   }[];
  //   postComments: {
  //     userId: number;
  //     commentId: string;
  //     userName: string;
  //     userComment: string;
  //   }[];
  // };
  postData: DocumentData;
};

const ProfileOpenImage = ({ setIsPostClicked, postData }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedAnimation, setIsLikedAnimation] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const changeHeatrVisibility = setInterval(() => {
      setIsLikedAnimation(false);
    }, 1000);
    return () => {
      clearInterval(changeHeatrVisibility);
    };
  }, []);
  return (
    <div className='ProfileOpenImageWindow'>
      {/* {UserList.map(UserData => {
        if (UserData.userId === 2) {
          return ( */}
      <div className='ProfileOpenImageContainer'>
        <div
          className='ProfilOpenImageCloseIcon'
          onClick={() => setIsPostClicked(false)}
        >
          X
        </div>
        <img
          onDoubleClick={() => {
            setIsLiked(true);
            setIsLikedAnimation(true);
          }}
          src={postData.postImage}
          alt={postData.postDescription}
          className='ProfileOpenImage'
        />

        <div className={isLikedAnimation ? 'heartBox' : 'heartBoxHidden'}>
          <FavoriteIcon className='heart' sx={{ fontSize: '80px' }} />
        </div>
        <div className='ProfilImageCommentSection'>
          NONE
        </div>
        <div className='ProfilImageDescTimeBox'>
          <Typography variant='body1'>{postData.postDescription}</Typography>
        </div>
        <div className='interactionPostBtnProfileBox'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'space-between',
            }}
          >
            <div
              className='interactionPostBtn'
              onClick={() => {
                setIsLiked(!isLiked);
                isLiked
                  ? setIsLikedAnimation(false)
                  : setIsLikedAnimation(true);
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
        </div>
        <div className='ProfileImageAddComment'>
          <input type='text' />
          <input type='submit' />
        </div>
      </div>
    </div>
  );
};
export default ProfileOpenImage;
