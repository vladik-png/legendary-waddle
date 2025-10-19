import { Dimensions, StyleSheet, Text, View } from "react-native";

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

  if (rect && rect.x == "centered")
    rect.x = (screenW - rect.w) / 2;


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
    <View style={viewStyle}>
      <Text onPress={onPress} style={finalStyle}>{text}</Text>
    </View>
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