import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { relative } from 'path';
import { useState } from 'react';
import { useAppContainer } from '../components/Context';

type Props = {
  setIsManagingProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddPostPage = ({ setIsManagingProfile }: Props) => {
  const {
    storage,
    user,
    userInfo,
    userPostData,
    auth,
    addPost,
    addProfilePicture,
    addProfileBio,
  } = useAppContainer();
  const [uploadedImg, setUploadedImg] = useState<Blob>();
  const [newUserBio, setNewUserBio] = useState('');
  const handleFileUpload = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadedImg(file);
      console.log(URL.createObjectURL(file));
    }
  };

  const handlePostFormSubmit = (e: any) => {
    e.preventDefault();
    if (auth.currentUser && uploadedImg !== undefined) {
      addProfilePicture(uploadedImg);
      setUploadedImg(undefined);
      setIsManagingProfile(false);
    }
    if (auth.currentUser && newUserBio.length !== 0) {
      addProfileBio(newUserBio, auth.currentUser.uid);
      setNewUserBio('');
      setIsManagingProfile(false);
    }
  };
  return (
    <div className='AddUserInfo'>
      <div>Profile Settings</div>
      <div
        style={{
          position: 'absolute',
          top: '0px',
          right: '0px',
          cursor: 'pointer',
          fontWeight: '700',
        }}
        onClick={() => setIsManagingProfile(false)}
      >
        X
      </div>
      <form onSubmit={handlePostFormSubmit} className='AddPostForm'>
        <input type='file' onChange={handleFileUpload} />
        <textarea
          cols={30}
          rows={5}
          placeholder='Write something about Yourself'
          value={newUserBio}
          onChange={text => setNewUserBio(text.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
};
export default AddPostPage;
