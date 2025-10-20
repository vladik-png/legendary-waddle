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
        transform
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
    borderColor: "rgba(255, 255, 255, 0.7)",
    borderWidth: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  darkButton: {
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderWidth: 1,
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    borderRadius: 25,
    alignItems: "center",
  },
  buttonTextBlack: {
    fontSize: 18,
    color: "white",
    fontFamily: "Inter"
  },
});