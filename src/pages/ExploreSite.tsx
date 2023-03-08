import PostCard from '../components/PostCart';
import { UserList } from '../data/UsersList';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import PostImage from '../Images/office.jpg';
import PostContainer from '../components/PostContainer';
import { useAppContainer } from '../components/Context';

const ExploreSite = () => {
  const { auth, userInfo, userPostData, storage } = useAppContainer();
  const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());
  return (
    <div>
      {userPostData &&
        shuffle(userPostData).map(postData => (
          <PostContainer postData={postData} />
        ))}
    </div>
  );
};
export default ExploreSite;
