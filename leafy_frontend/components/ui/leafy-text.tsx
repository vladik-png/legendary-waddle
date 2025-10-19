import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyText(
  { text = "",
    rect = undefined,
    fontSize = 16,
    onPress = undefined,
    align = "",
    style = {}
  }
) {

  if (rect && rect.x == "centered" && rect.w) {
    if (typeof rect.w == "string" && rect.w.includes("%")) {
      rect.x = (screenW - (parseFloat(rect.w) * (screenW / 100.0))) / 2;
    } else {
      rect.x = (screenW - rect.w) / 2;
    }
  }

  const viewStyle = rect ? {
    position: "absolute",
    left: rect.x,
    top: rect.y,
    width: rect.w,
    height: rect.h,
  } : undefined;

  const finalStyle = [defStyles.defaultText, style, {
    textAlign: align ? align : "left",
    fontSize
  }];

  return (
    <Pressable style={viewStyle} onPress={onPress}>
      <Text onPress={onPress} style={finalStyle}>{text}</Text>
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