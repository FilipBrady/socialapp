export type User = {
  userId: number;
  userEmail: string;
  userName: string;
  userPassword: string;
  userProfilePic: string;
  userBio: string;
  userProfile: UserProfile[];
};

export type UserProfile = {
  profileFeed: FeedPost[];
  likedPosts: string;
  followers: number;
  following: number;
};

export type FeedPost = {
  postId: string;
  postImage: string;
  postDescription: string;
  postDate: string;
  postLikes: PostLikedBy[];
  postComments: PostCommentedBy[];
};

export type PostCommentedBy = {
  userId: number;
  commentId: string;
  userName: string;
  userComment: string;
};

export type PostLikedBy = {
  userId: number;
  userName: string;
};
