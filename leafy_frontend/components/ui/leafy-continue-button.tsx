import LeafyText from "@/components/ui/leafy-text";
import { Dimensions, Pressable } from "react-native";

//styles import
import { buttonStyle } from "../styles/buttonStyle";

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
    finalStyle = [buttonStyle.continueButton, style];
  } else {
    finalStyle = rect
      ? [buttonStyle.continueButton, {
        position: "absolute",
        left: rect.x,
        top: rect.y,
        width: rect.w,
        height: rect.h,
        transform
      }] : buttonStyle.continueButton;
  }

  return (
    <Pressable style={finalStyle} onPress={onPress}>
      <LeafyText align="center" style={[color, { fontSize: 16 }]} text={text} onPress={onPress} />
    </Pressable>
  );
};