import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyInput(
  { text = "",
    placeholder = "",
    rect = undefined,
    value = undefined,
    onChangeText = undefined,
    style = {},
    maxLenght = 100
  }) {

  if (rect && rect.x === "centered" && rect.w) {
    if (typeof rect.w == "string" && rect.w.includes("%")) {
      rect.w = parseFloat(rect.w) * (screenW / 100.0);
      rect.x = (screenW - rect.w) / 2;
    } else {
      rect.x = (screenW - rect.w) / 2;
    }
  }
  if (rect && rect.y === "centered" && rect.h) {
    if (typeof rect.h == "string" && rect.h.includes("%")) {
      rect.h = parseFloat(rect.h) * (screenH / 100.0);
      rect.y = (screenH - rect.h) / 2.0;
    } else {
      rect.y = (screenH - rect.h) / 2.0;
    }
  }

  const finalStyle = rect ?
    {
      position: "absolute",
      left: rect.x,
      top: rect.y - 14,
      width: rect.w,
      height: rect.h
    } : undefined;

  return (
    <View style={finalStyle}>
      <Text style={styles.whiteText}>{text}</Text>
      <TextInput style={[styles.defaultInput, style]} value={value}
        onChangeText={onChangeText} placeholder={placeholder} maxLength={maxLenght}
        placeholderTextColor="rgba(255, 255, 255, 0.4)" />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultInput: {
    borderRadius: 25,
    height: 56,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255, 255, 0.2)",
    backgroundColor: "rgba(24, 23, 37, 0.5)",
    color: "rgba(255, 255, 255, 0.4)",
  },
  whiteText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Inter",
    fontSize: 14,
  },
});