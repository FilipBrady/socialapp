import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ProfileOpenImage from './ProfileOpenImage';
import { collection, DocumentData, orderBy, query } from 'firebase/firestore';
import { useAppContainer } from './Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';

type Props = {
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

const ProfileFeedImage = ({ postData }: Props) => {
  const { db, userPostData } = useAppContainer();
  const [isHovered, setIsHovered] = useState(false);
  const [isPostClicked, setIsPostClicked] = useState(false);
  return (
    <div>
      {/* {postDatas.map((postData: any) => ( */}
        <div key={postData.postId}>
          <div
            className='ProfileFeedBox'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsPostClicked(true)}
          >
            <img
              key={postData.postId}
              className='ProfileFeedImage'
              src={postData.postImage}
              alt={postData.postDescription}
            />
            <div
              className={isHovered ? 'ProfilImageHoverInfoBox' : 'DisplayNone'}
            >
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
                  {postData.postLikes}
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
                  {postData.postComments}
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
              postData={postData}
              setIsPostClicked={setIsPostClicked}
            />
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};
export default ProfileFeedImage;
