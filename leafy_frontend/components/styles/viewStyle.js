import { Platform } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const viewStyle = {
  homePageQuoteView: {
    height: hp("40%"),
    width: "104%",
    backgroundColor: "#005C4D",
    borderRadius: 30,
    opacity: (Platform.OS === "android" ? 0.07 : 0.25),
    margin: "-2%",
  },
  imageBackground: {
    flex: 1,
    padding: "2%",
    paddingTop: "10%",
  }
};