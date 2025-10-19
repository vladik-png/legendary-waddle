import LeafyText from "@/components/ui/leafy-text";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyContinueButton(
  { text = "",
    onPress = () => { },
    rect = undefined,
    color = "",
    style = undefined,
  }
) {

  if (color) {
    if (color == "dark") {
      color = "rgba(24, 23, 37, 0.5)"
    }
  }

  if (rect && rect.x == "centered")
    rect.x = (screenW - rect.w) / 2;

  let finalStyle;
  if (style) {
    finalStyle = [styles.leafyButton, style];
  } else {
    finalStyle = rect
      ? [styles.leafyButton, {
        position: "absolute",
        left: rect.x,
        top: rect.y,
        width: rect.w,
        height: rect.h,
      }] : styles.leafyButton;
  }

  return (
    <Pressable style={finalStyle} onPress={onPress}>
      <LeafyText align="center" style={{ color }} text={text} onPress={onPress} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  leafyButton: {
    backgroundColor: "#005C4D",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  darkButton: {
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  buttonTextBlack: {
    fontSize: 18,
    color: "white",
    fontFamily: "Inter"
  },
});