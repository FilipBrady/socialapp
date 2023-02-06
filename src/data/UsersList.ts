import Image from '../Images/office.jpg';
import profilPic from '../Images/office-profilePic.jpg';
export const UserList = [
  {
    userId: 1,
    userEmail: 'myEmail@gmail.com',
    userName: 'BoB00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am BoB. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `BoB00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '25.1.2022',
        },
        {
          postId: `BoB00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '25.2.2022',
        },
        {
          postId: `BoB00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '25.3.2022',
        },
      ],
      likedPosts: 'none',
      followers: 10,
      following: 25,
    },
  },
  {
    userId: 2,
    userEmail: 'MichaelEmail@gmail.com',
    userName: 'Michael00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am Michael. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `Michael00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '15.1.2022',
        },
        {
          postId: `Michael00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '15.2.2022',
        },
        {
          postId: `Michael00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '15.3.2022',
        },
      ],
      likedPosts: 'none',
      followers: 10,
      following: 25,
    },
  },
  {
    userId: 3,
    userEmail: 'AdamEmail@gmail.com',
    userName: 'Adam00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am Adam. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `Adam00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '25.1.2022',
        },
        {
          postId: `Adam00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '25.2.2022',
        },
        {
          postId: `Adam00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '25.3.2022',
        },
      ],
      likedPosts: 'none',
      followers: 10,
      following: 25,
    },
  },
];
