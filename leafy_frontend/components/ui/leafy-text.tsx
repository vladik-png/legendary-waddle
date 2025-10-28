import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyText(
  { text = "",
    rect = undefined,
    fontSize = 12,
    onPress = undefined,
    align = "",
    style = {}
  }
) {

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

  const viewStyle = rect ? {
    position: "absolute",
    left: rect.x,
    top: rect.y,
    width: rect.w,
    height: rect.h,
    transform
  } : undefined;

  const finalStyle = [defStyles.defaultText, {
    textAlign: align ? align : "left",
    fontSize
  }, style];

  return (
    <Pressable onPress={onPress}>
      <View style={viewStyle}>
        <Text onPress={onPress} style={finalStyle}>{text}</Text>
      </View>
    </Pressable>
  );
};

const defStyles = StyleSheet.create({
  defaultText: {
    color: "white",
    textAlign: "left",
    padding: 0,
    margin: 0,
    fontSize: 14,
  }
});