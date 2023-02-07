import Image from '../Images/office.jpg';
import profilPic from '../Images/office-profilePic.jpg';
export const UserList = [
  {
    userId: 1,
    userEmail: 'myEmail@gmail.com',
    userName: 'BoB00',
    userPassword: 'BoB00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am BoB. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `BoB00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '25.1.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-1',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-1',
              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `BoB00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '25.2.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-2',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-2',
              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `BoB00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '25.3.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-3',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-3',
              userComment: 'I do not like you bro!!',
            },
          ],
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
    userPassword: 'Michael00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am Michael. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `Michael00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '15.1.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-1',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-1',
              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `Michael00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '15.2.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-1',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-2',

              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `Michael00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '15.3.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-1',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-3',

              userComment: 'I do not like you bro!!',
            },
          ],
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
    userPassword: 'Adam00',
    userProfilePic: profilPic,
    userBio: 'Hello, I am Adam. I like Lorem...',
    userProfile: {
      profilFeed: [
        {
          postId: `Adam00-1`,
          postImage: Image,
          postDescription: 'This is Michael',
          postDate: '25.1.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              commentId: 'BoB00-comment-1',
              userName: 'BoB00',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              commentId: 'Michael00-comment-1',
              userName: 'Michael00',
              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `Adam00-2`,
          postImage: Image,
          postDescription: 'This is Michael 2',
          postDate: '25.2.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-2',
              userComment: 'I like this One!',
            },
            {
              userId: 2,
              commentId: 'Michael00-comment-2',
              userName: 'Michael00',
              userComment: 'I do not like you bro!!',
            },
          ],
        },
        {
          postId: `Adam00-3`,
          postImage: Image,
          postDescription: 'This is Michael 3',
          postDate: '25.3.2022',
          postLikes: [
            {
              userId: 1,
              userName: 'BoB00',
            },
            {
              userId: 2,
              userName: 'Michael00',
            },
          ],
          postComments: [
            {
              userId: 1,
              userName: 'BoB00',
              commentId: 'BoB00-comment-3',

              userComment: 'I like this One!',
            },
            {
              userId: 2,
              userName: 'Michael00',
              commentId: 'Michael00-comment-3',

              userComment: 'I do not like you bro!!',
            },
          ],
        },
      ],
      likedPosts: 'none',
      followers: 10,
      following: 25,
    },
  },
];
