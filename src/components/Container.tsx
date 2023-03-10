import { Provider } from './Context';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  collectionGroup,
  doc,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import {
  FirebaseStorage,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export type AppState = {
  db: Firestore;
  auth: Auth;
  user: User | null | undefined;
  storage: FirebaseStorage;
  userInfo: DocumentData[] | undefined;
  userPostData: DocumentData[] | undefined;
  userComment: DocumentData[] | undefined;
  signInWithGoogle: () => void;
  logInWithEmailAndPassword: (email: string, password: string) => void;
  registerWithEmailAndPassword: (
    name: string,
    email: string,
    password: string,
    userBio: string,
    uploadedImg: Blob
  ) => void;
  addPost: (useruid: string, postDesc: string, uploadedImg: Blob) => void;
  addComment: (useruid: string, postId: string, userComment: string) => void;
  addProfilePicture: (uploadedImg: Blob) => void;
  addProfileBio: (newUserBio: string, useruid: string) => void;

  // addLikeToPost: (postId: string) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyC06wOV-mni9u0F2Aq4UT8bYiQRT2dqF7Y',
    authDomain: 'realtimedb-b0b6f.firebaseapp.com',
    databaseURL:
      'https://realtimedb-b0b6f-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'realtimedb-b0b6f',
    storageBucket: 'gs://realtimedb-b0b6f.appspot.com/',
    messagingSenderId: '1034556421196',
    appId: '1:1034556421196:web:4750e42280a4c6c90070e9',
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  const [user] = useAuthState(auth);

  const userProfileInfo = query(collection(db, 'users'));
  const [userInfo] = useCollectionData(userProfileInfo);

  const userPost = query(
    collection(db, 'userPosts'),
    orderBy('createdAt', 'asc')
  );
  const [userPostData] = useCollectionData(userPost);

  const userComments = query(
    collection(db, 'userComments'),
    orderBy('createdAt', 'asc')
  );
  const [userComment] = useCollectionData(userComments);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const popUp = await signInWithPopup(auth, provider);
      const user = popUp.user;
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const existingUser = await getDocs(q);
      if (existingUser.docs.length === 0) {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const registerWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string,
    userBio: string,
    uploadedImg: Blob
  ) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = createUser.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        photoURL: null,
        userBio: userBio,
      });
      const storageRef = ref(storage, `userProfilePictures/` + user.uid);
      if (uploadedImg !== undefined) {
        const uploadTask = uploadBytesResumable(storageRef, uploadedImg);
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
    } catch (err) {
      console.log(err);
    }
  };

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const addPost = async (
    useruid: string,
    postDesc: string,
    uploadedImg: Blob
  ) => {
    const newDocRef = await addDoc(collection(db, 'userPosts'), {
      postDescription: postDesc,
      useruid: useruid,
      createdAt: serverTimestamp(),
      postLikes: 0,
      postComments: 0,
    });
    const postId = newDocRef.id;
    await setDoc(newDocRef, { postId }, { merge: true });
    const storageRef = ref(storage, `${auth.currentUser?.uid}/` + postId);
    if (uploadedImg !== undefined) {
      const uploadTask = uploadBytesResumable(storageRef, uploadedImg);
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

  const addComment = async (
    useruid: string,
    postId: string,
    userComment: string
  ) => {
    await addDoc(collection(db, 'userComments'), {
      useruid: useruid,
      createdAt: serverTimestamp(),
      userCommentText: userComment,
      postId: postId,
    });
  };

  const addProfilePicture = async (uploadedImg: Blob) => {
    const storageRef = ref(
      storage,
      `userProfilePictures/` + auth.currentUser?.uid
    );
    if (uploadedImg !== undefined) {
      const uploadTask = uploadBytesResumable(storageRef, uploadedImg);
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

  // const addLikeToPost =  (postId: string) => {
  //   const docRef = doc(db, 'userPosts', postId);
  //   console.log(docRef);

  //    setDoc(docRef, {
  //     postLikes: increment(1),
  //   }, {merge: true});
  //   // userPostData?.map(async post => {
  //   //   if (post.postId === postId) {
  //   //   }
  //   // }
  //   // );
  //   // const newData = {
  //   //   postLikes: increment(1)
  //   // }
  //   // await setDoc(doc(db, 'userPosts', postId), newData, { merge: true })
  // };

  const addProfileBio = async (newUserBio: string, useruid: string) => {
    const newData = {
      userBio: newUserBio,
      photoURL: auth.currentUser?.uid,
    };
    await setDoc(doc(db, 'users', useruid), newData, { merge: true });
  };

  const appState: AppState = {
    db: db,
    auth: auth,
    user: user,
    storage: storage,
    userInfo: userInfo,
    userPostData: userPostData,
    userComment: userComment,
    signInWithGoogle: signInWithGoogle,
    logInWithEmailAndPassword: logInWithEmailAndPassword,
    registerWithEmailAndPassword: registerWithEmailAndPassword,
    addPost: addPost,
    addComment: addComment,
    addProfilePicture: addProfilePicture,
    addProfileBio: addProfileBio,

    // // addLikeToPost: addLikeToPost,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
