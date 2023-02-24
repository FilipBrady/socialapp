import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import { useState } from 'react';
import { useAppContainer } from '../components/Context';

const AddPostPage = () => {
  const { storage, user, userInfo, userPostData, auth, addPost } =
    useAppContainer();
  const [uploadedImg, setUploadedImg] = useState<Blob>();
  const [newPostDescription, setNewPostDescription] = useState('');
  const handleFileUpload = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadedImg(file);
      console.log(URL.createObjectURL(file));
    }
  };

  const handlePostFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      auth.currentUser &&
      newPostDescription !== '' &&
      uploadedImg !== undefined
    ) {
      addPost(auth.currentUser.uid, newPostDescription, uploadedImg);
      setNewPostDescription('');
      setUploadedImg(undefined);
    }
  };
  return (
    <div>
      <div>AddPostPage</div>
      <form onSubmit={handlePostFormSubmit} className='AddPostForm'>
        <input type='file' onChange={handleFileUpload} />
        <textarea
          cols={30}
          rows={5}
          placeholder='description'
          value={newPostDescription}
          onChange={text => setNewPostDescription(text.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
};
export default AddPostPage;
