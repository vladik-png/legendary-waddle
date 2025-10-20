import { Dimensions, Image, Pressable, StyleSheet } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyReturnArrowButton(
  {
    onPress = () => { },
    rect = undefined,
  }
) {

  let buttonStyle = styles.leafyButton;

  if (rect && rect.x == "centered")
    rect.x = (screenW - rect.w) / 2;

  const finalStyle = rect
    ? [buttonStyle, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: 48,
      height: 48,
    }] : buttonStyle;

  const images = {
    returnLeft: require('@/assets/images/ReturnArrow.png'),
  };
  return (
    <Pressable style={finalStyle} onPress={onPress}>
      <Image source={images["returnLeft"]} ></Image>
    </Pressable >
  );
};

const styles = StyleSheet.create({
  leafyButton: {
    backgroundColor: "#2A2937",
    alignItems: "center",
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center"
  },
});