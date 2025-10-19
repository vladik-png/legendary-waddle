import LeafyText from "@/components/ui/leafy-text";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyButton(
  { text = "",
    onPress = () => { },
    rect = undefined,
    color = "",
  }
) {

  if (color) {
    if (color == "dark") {
      color = "rgba(24, 23, 37, 0.5)"
    }
  }

  if (rect && rect.x == "centered")
    rect.x = (screenW - rect.w) / 2;

  const finalStyle = rect
    ? [styles.leafyButton, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
    }] : styles.leafyButton;

  return (
    <Pressable style={finalStyle} onPress={onPress}>
      <LeafyText align="center" style={{ color }} text={text} />
    </Pressable>
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
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextBlack: {
    fontSize: 18,
    color: "black",
  },
});