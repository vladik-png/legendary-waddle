import { Platform } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const viewStyle = {
  homePageQuoteView: {
    height: hp("51%"),
    width: "100%",
    backgroundColor: "#005C4D",
    borderRadius: 10,
    opacity: (Platform.OS === "android" ? 0.07 : 0.25),
  }
};