import LeafyText from "@/components/ui/leafy-text";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyButton(
  { text = "",
    onPress = () => { },
    rect = undefined,
    color = "",
    style = {},
  }
) {

  if (color) {
    if (color == "dark") {
      color = "rgba(24, 23, 37, 0.5)"
    }
  }

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
    ? [styles.leafyButton, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
      transform
    }, style] : styles.leafyButton;

  return (
    <Pressable style={finalStyle} onPress={onPress}>
      <LeafyText align="center" style={style?.color} text={text} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  leafyButton: {
    backgroundColor: "#BFFF00",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  darkButton: {
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextBlack: {
    fontSize: 18,
    color: "black",
  },
});