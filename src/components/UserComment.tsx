import { Typography } from '@mui/material';
import { DocumentData } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../data/routes';
import { useAppContainer } from './Context';

type Props = {
  comment: DocumentData;
};
const UserComment = ({ comment }: Props) => {
  const { auth, addComment, userComment, userInfo, storage } =
    useAppContainer();
  const [imageSrcUrl, setImageSrcUrl] = useState('');
  const pathReference = ref(
    storage,
    `userProfilePictures/${comment.useruid}`
  );

  getDownloadURL(pathReference).then(url => {
    setImageSrcUrl(url);
  });
  
  return (
    <div className='userCommentBox'>
      {userInfo &&
        userInfo.map(user => {
          if (user.uid === comment.useruid) {
            return (
              <div className='userCommentUserInfoBox'>
                <img className='userCommentImg' alt='foto' src={imageSrcUrl} />
                {user.name === auth.currentUser?.displayName ? (
                  <Link
                    className='userCommentUserNameLink'
                    to={`${routes.myProfil}`}
                  >
                    <h6>{user.name}</h6>
                  </Link>
                ) : (
                  <Link
                    className='userCommentUserNameLink'
                    to={`${routes.profil}/${user.name}`}
                  >
                    <h6>{user.name}</h6>
                  </Link>
                )}
              </div>
            );
          }
        })}
      <div className='userCommentText'>{comment.userCommentText}</div>
    </div>
  );
};
export default UserComment;
