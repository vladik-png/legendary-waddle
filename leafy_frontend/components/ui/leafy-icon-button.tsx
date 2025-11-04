import { Dimensions, Image, Pressable, Text } from "react-native";

//styles import
import { buttonStyle } from "@/components/styles/buttonStyle";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyIconButton(
  { text = "",
    textAlign = "",
    onPress = () => { },
    rect = undefined,
    color = "",
    source = "",
    style = {}
  }
) {

  let finalButtonStyle = buttonStyle.limeButton;

  if (color && color == "dark")
    finalButtonStyle = buttonStyle.darkButton;


  if (rect && rect.x == "centered" && rect.w) {
    if (typeof rect.w == "string" && rect.w.includes("%")) {
      rect.x = (screenW - (parseFloat(rect.w) * (screenW / 100.0))) / 2;
    } else {
      rect.x = (screenW - rect.w) / 2;
    }
  }

  if (rect?.img) {
    rect.img.style = {
      position: "absolute",
      left: rect.img.x,
      top: rect.img.y,
    }
  }

  const finalStyle = rect
    ? [finalButtonStyle, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
    }, style] : finalButtonStyle;
  //const finalStyle = buttonStyle;

  const images = {
    google: require('@/assets/images/Google.png'),
    apple: require('@/assets/images/Apple_Inc.png'),
    home: require('@/assets/images/HomeBtn.png'),
    compass: require('@/assets/images/Compass.png'),
    profile: require('@/assets/images/Profile.png'),
    newContent: require('@/assets/images/addNewContent.png'),
  };
  return (
    //<View style={position}>
    <Pressable style={[finalStyle, { alignItems: textAlign }]} onPress={onPress}>
      <Image source={images[source]} style={rect?.img?.style}></Image>
      <Text style={[color === "dark" ? buttonStyle.buttonTextWhite : buttonStyle.buttonTextBlack, { textAlign }]}>{text}</Text>
    </Pressable >
    //</View>
  );
};
