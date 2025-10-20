import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyIconButton(
  { text = "",
    onPress = () => { },
    rect = undefined,
    color = "",
    source = ""
  }
) {

  let buttonStyle = styles.leafyButton;

  if (color && color == "dark")
    buttonStyle = styles.darkButton;


  if (rect && rect.x == "centered" && rect.w) {
    if (typeof rect.w == "string" && rect.w.includes("%")) {
      rect.x = (screenW - (parseFloat(rect.w) * (screenW / 100.0))) / 2;
    } else {
      rect.x = (screenW - rect.w) / 2;
    }
  }

  if (rect.img) {
    rect.img.style = {
      position: "absolute",
      left: rect.img.x,
      top: rect.img.y,
    }
  }

  /*const position = rect ? {
    position: "absolute",
    left: rect.x,
    top: rect.y,
    width: rect.w,
    height: rect.h,
  } : null;*/

  const finalStyle = rect
    ? [buttonStyle, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
    }] : buttonStyle;
  //const finalStyle = buttonStyle;

  const images = {
    google: require('@/assets/images/Google.png'),
    apple: require('@/assets/images/Apple_Inc.png'),
  };
  return (
    //<View style={position}>
    <Pressable style={finalStyle} onPress={onPress}>
      <Image source={images[source]} style={rect.img.style}></Image>
      <Text style={styles.buttonTextBlack}>{text}</Text>
    </Pressable >
    //</View>
  );
};

const styles = StyleSheet.create({
  leafyButton: {
    backgroundColor: "#BFFF00",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  darkButton: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextBlack: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});