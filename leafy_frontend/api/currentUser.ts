import { UserProfile } from "@/app/screens/UserPage/types";

export let CURRENT_USER = {
  firstName: "",
  lastName: "",
  username: "",
  UID: 0,
};

export async function updateCurrentUserData() {

}

export async function getUserProfileData(userID: number): Promise<UserProfile> {
  //const response = await fetch(`${API_URL}/userProfile?userID=${userID}`);
  //const data: UserProfile = await response.json();
  return {
    first_name: "c",
    last_name: "c",
    username: "c",
    joined_at: "c",
    bio: "c",
    image_url: "c",
    followers: 0,
    followings: 0,
    is_following: false,
    posts: 0,
  };
}