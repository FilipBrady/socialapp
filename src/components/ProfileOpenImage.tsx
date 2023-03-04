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
import { useAppContainer } from './Context';

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
  imageSrcUrl: string;
};

const ProfileOpenImage = ({
  setIsPostClicked,
  postData,
  imageSrcUrl,
}: Props) => {
  const { auth, addComment } = useAppContainer();
  const [isLiked, setIsLiked] = useState(false);
  const [isLikedAnimation, setIsLikedAnimation] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [userComment, setUserComment] = useState('');

  const handleCommentSubmit = (submitting: any) => {
    // submitting.preventDefault();
    // if (userComment.length !== 0) {
    //   if (auth.currentUser !== null) {
    //     addComment(auth.currentUser.uid, postData.postId, userComment);
    //     setUserComment('');
    //   } else alert('you need to be logged in');
    // }
  };
  // console.log(postData.postComments[0].userComment);
  
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
        <div className='ProfileOpenImageRight'>
          <div
            // style={{
            //   maxWidth: '400px',
            //   gridColumnStart: 1,
            //   gridColumnEnd: 5,
            //   gridRowStart: 3,
            //   justifySelf: 'center',

            // }}
            className='ProfileOpenImageImg'
          >
            <div style={{ position: 'relative' }}>
              <div className={isLikedAnimation ? 'heartBox' : 'heartBoxHidden'}>
                <FavoriteIcon className='heart' sx={{ fontSize: '80px' }} />
              </div>
              <img
                onDoubleClick={() => {
                  setIsLiked(true);
                  setIsLikedAnimation(true);
                }}
                src={imageSrcUrl}
                alt={postData.postDescription}
                className='ProfileOpenImage'
              />
            </div>
          </div>
        </div>
        <div className='ProfileOpenImageLeft'>
          {' '}
          <div
            className='ProfilOpenImageCloseIcon'
            onClick={() => setIsPostClicked(false)}
          >
            X
          </div>
          <div className='ProfilImageCommentSection'>
            {/* {postData.postComments} */}
            none
          </div>
          <div className='ProfileOpenImageInteractionSection'>
            <div className='ProfilImageDescTimeBox'>
              <Typography variant='body1'>
                {postData.postDescription}
              </Typography>
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
            <form
              onSubmit={handleCommentSubmit}
              className='ProfileImageAddComment'
            >
              <input
                type='text'
                value={userComment}
                onChange={text => setUserComment(text.target.value)}
              />
              <input type='submit' value='Add Comment' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileOpenImage;
