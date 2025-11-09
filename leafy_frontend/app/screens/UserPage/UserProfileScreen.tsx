import { getUserProfileData } from "@/api/currentUser";
import LeafyReturnArrowButton from "@/components/ui/leafy-return-arrow-btn";
import { textStyle } from "@/styles/textStyles";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from "react-native";
import BottomBar from "../bars/bottomBar";
import { userPage } from "./styles";
import { UserProfile } from "./types";

export default async function UserProfileScreen({ navigator, userID, isCurrentUser }: { navigator: any, userID: number, isCurrentUser: boolean }) {
  let mainButtons;
  const [userInfo, setUserInfo] = useState<UserProfile>();

  useEffect(() => {
    async function loadUserInfo() {
      const data: UserProfile = await getUserProfileData(userID);
      if (!data) return;

      setUserInfo(data);

      console.log("");
    }
    loadUserInfo()
  }, []);

  mainButtons = (isCurrentUser === true) ? (
    <Pressable style={userPage.mainButtons.editButton.pressable}>
      <Text style={userPage.mainButtons.editButton.text}>Edit</Text>
    </Pressable>
  )
    :
    (<View style={userPage.mainButtons.view}>
      <Pressable style={userPage.mainButtons.optionButton.pressable}>
        <Text style={userPage.mainButtons.optionButton.text}>...</Text>
      </Pressable>
      <Pressable style={userPage.mainButtons.followButton.pressable}>
        <Text style={userPage.mainButtons.followButton.text}>Follow</Text>
      </Pressable>
    </View>
    )

  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={{ flex: 1 }}>
      <ScrollView style={[{ padding: "2%" }]}>
        <ImageBackground source={require("@/assets/images/profileBackground.png")} style={userPage.imageBackground} />
        <LeafyReturnArrowButton style={{ marginTop: "2%" }} onPress={() => navigator.goBack()} />
        <View style={{ flexDirection: "column", gap: 5 }}>
          <View style={{ width: "100%", marginTop: "45%", height: 100, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={userPage.profilPic.view}>
              <Image source={require("@/assets/images/giggaNigga.png")} style={userPage.profilPic.picture} />
            </View>
            {
              mainButtons
            }
          </View>

          <Text style={textStyle.white20}>{userInfo ? `${userInfo?.first_name} ${userInfo?.last_name}` : "Gigga Nigga"}</Text>
          <Text style={textStyle.grey12}>{userInfo?.username || "@username"}</Text>

          <Text style={userPage.bio}>{userInfo?.bio}</Text>

          <View style={userPage.joinedAt.view}>
            <Image source={require("@/assets/images/Calendar.png")}></Image>
            <Text style={userPage.joinedAt.joined}>Joined {userInfo?.joined_at}</Text>
          </View>

          <View style={userPage.stats.view}>
            <View style={userPage.stats.item}>
              <Text style={userPage.stats.itemText}>{userInfo?.followings}</Text>
              <Text style={userPage.stats.itemText}>Following</Text>
            </View>
            <View style={userPage.stats.item}>
              <Text style={userPage.stats.itemText}>{userInfo?.followers}</Text>
              <Text style={userPage.stats.itemText}>Followers</Text>
            </View>
            <View style={userPage.stats.item}>
              <Text style={userPage.stats.itemText}>{userInfo?.posts}</Text>
              <Text style={userPage.stats.itemText}>Posts</Text>
            </View>
          </View>

        </View>

        <View style={userPage.post.view}>
          <View style={userPage.post.profilInfo.view}>
            <Image style={userPage.post.profilInfo.picture} source={require("@/assets/images/giggaNigga.png")}></Image>
            <Text style={userPage.post.profilInfo.name}>{"Gigga Nigga"}</Text>
          </View>
        </View>
      </ScrollView >
      <BottomBar />
    </ImageBackground >
  )
}