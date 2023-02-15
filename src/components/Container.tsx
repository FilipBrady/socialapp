import { Provider } from './Context';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
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
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export type AppState = {
  db: Firestore;
  auth: Auth;
  user: User | null | undefined;
  userInfo: DocumentData[] | undefined;
  userPostData: DocumentData[] | undefined;
  signInWithGoogle: () => void;
  logInWithEmailAndPassword: (email: string, password: string) => void;
  registerWithEmailAndPassword: (
    name: string,
    email: string,
    password: string
  ) => void;
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
    storageBucket: 'realtimedb-b0b6f.appspot.com',
    messagingSenderId: '1034556421196',
    appId: '1:1034556421196:web:4750e42280a4c6c90070e9',
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [user] = useAuthState(auth);

  const userProfileInfo = query(collection(db, 'users'));
  const [userInfo] = useCollectionData(userProfileInfo);

  const userPost = query(
    collection(db, 'userPosts'),
    orderBy('createdAt', 'asc')
  );
  const [userPostData] = useCollectionData(userPost);

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
    password: string
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
      });
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

  const appState: AppState = {
    db: db,
    auth: auth,
    user: user,
    userInfo: userInfo,
    userPostData: userPostData,
    signInWithGoogle: signInWithGoogle,
    logInWithEmailAndPassword: logInWithEmailAndPassword,
    registerWithEmailAndPassword: registerWithEmailAndPassword,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
