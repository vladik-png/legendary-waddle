import { textStyle } from "@/components/styles/textStyles";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

wp("100");

export const userPage = {
  imageBackground: {
    margin: "-2%",
    height: hp("36%"),
    width: "104%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  profilPic: {
    view: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: "transparent"
    },
    picture: {
      width: "100%",
      height: "100%"
    }
  },
  mainButtons: {
    view: {
      flexDirection: "row",
      height: 45,
      alignSelf: "flex-end",
      gap: 10
    },
    optionButton: {
      pressable: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "white",
        width: 45,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22
      },
      text: textStyle.white16
    },
    followButton: {
      pressable: {
        backgroundColor: "white",
        width: 100,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22
      },
      text: textStyle.black16
    },
    editButton: {
      pressable: {
        backgroundColor: "transparent",
        width: 100,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "white",
      },
      text: textStyle.white16
    }
  },
  bio: [
    textStyle.white18, {
      marginTop: 10,
      textAlign: "left"
    }
  ],
  joinedAt: {
    view: {
      marginTop: 10,
      flexDirection: "row",
      gap: 5
    },
    joined: textStyle.grey16,
  },
  stats: {
    view: {
      marginTop: 10,
      flexDirection: "row",
      gap: 30,
    },
    item: {
      flexDirection: "row",
      gap: 5,
    },
    itemText: textStyle.white14,
  },
  post: {
    view: {
      flexDirection: "column",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
      margin: 10,
      marginLeft: "-3%",
      marginRight: "-3%",
    },
    profilInfo: {
      view: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: 5,
      },
      picture: {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
      name: textStyle.white16,
    },
    content: {
      view: {
        width: wp("80%"),
      }
    }
  }
};