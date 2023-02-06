export type User = {
  userId: number;
  userEmail: string;
  userName: string;
  userProfilePic: string;
  userBio: string;
  userProfile: UserProfile
};

export type UserProfile = {
  profileFeed: FeedPost[]
  likedPosts: string
  followers: number
  following: number
}

export type FeedPost = {
  postId: string,
  postImage: string;
  postDescription: string;
  postDate: string;
}