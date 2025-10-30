import { Dimensions, Image, Pressable, StyleSheet } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyReturnArrowButton(
  {
    onPress = () => { },
    rect = undefined,
    style = {},
  }
) {

  let buttonStyle = styles.leafyButton;

  if (rect && rect.w && typeof rect.w == "string" && rect.w.includes("%")) {
    rect.w = parseFloat(rect.w) * (screenW / 100.0);
  }
  if (rect && rect.h && typeof rect.h == "string" && rect.h.includes("%")) {
    rect.h = parseFloat(rect.h) * (screenH / 100.0);
  }

  if (rect && rect.y && typeof rect.y == "string" && rect.y.includes("%")) {
    rect.y = parseFloat(rect.y) * (screenH / 100.0);
  }
  if (rect && rect.x && typeof rect.x == "string" && rect.x.includes("%")) {
    rect.x = parseFloat(rect.x) * (screenW / 100.0);
  }

  let transform = [];
  if (rect && rect.x === "centered" && rect.w) {
    rect.x = "50%";
    transform.push({ translateX: -(rect.w / 2) });
  }
  if (rect && rect.y === "centered" && rect.h) {
    rect.y = "50%";
    transform.push({ translateY: -(rect.h / 2) });
  }

  const finalStyle = rect
    ? [buttonStyle, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: 48,
      height: 48,
      transform
    }] : [buttonStyle, style];

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