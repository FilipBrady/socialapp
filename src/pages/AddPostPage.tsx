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
  const [uploadedImageName, setUploadedImageName] = useState('');
  const [newPostDescription, setNewPostDescription] = useState('');
  const metadata = {
    contentType: 'image/jpeg',
  };
  const storageRef = ref(storage, 'images/' + uploadedImageName);
  const handleFileUpload = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadedImg(file);
      setUploadedImageName(file.name);
      console.log(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (uploadedImg !== undefined) {
      const uploadTask = uploadBytesResumable(
        storageRef,
        uploadedImg,
        metadata
      );
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        error => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            console.log('File available at', downloadURL);
          });
        }
      );
    }
  };
  // const pathReference = ref(storage, 'images/office.jpg');
  // getDownloadURL(storageRef)
  // .then((url) => {
  //   const img = document.getElementById('myimg');
  //   img?.setAttribute('src', url);
  // })

  const handlePostFormSubmit = (e: any) => {
    e.preventDefault();
    if (auth.currentUser && newPostDescription !== '') {
      addPost(auth.currentUser.uid, newPostDescription);
      setNewPostDescription('');
    }
  };
  return (
    <div>
      <div>AddPostPage</div>
      <img id='myimg' src='' alt='alt' />
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileUpload} />
        <input type='submit' />
      </form>
      <form onSubmit={handlePostFormSubmit}>
        <input
          type='text'
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
