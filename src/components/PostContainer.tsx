import { Box, Typography } from '@mui/material';
import { UserList } from '../data/UsersList';
import PostCard from './PostCart';

type Props = {
  UserData: {
    userId: number;
    userEmail: string;
    userName: string;
    userProfilePic: string;
    userBio: string;
    userProfile: {
      profilFeed: {
        postId: string;
        postImage: string;
        postDescription: string;
        postDate: string;
      }[];
      likedPosts: string;
      followers: number;
      following: number;
    };
  };
  UserFeed: {
    postId: string;
    postImage: string;
    postDescription: string;
    postDate: string;
  };
};

const PostContainer = ({ UserData, UserFeed }: Props) => {
  return (
    <Box className='PostContainer'>
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
            src={UserData.userProfilePic}
            alt={UserData.userName}
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
            {UserData.userName}
          </Typography>
        </Box>
        <PostCard UserFeed={UserFeed} key={UserData.userId} />
      </div>
    </Box>
  );
};
export default PostContainer;
