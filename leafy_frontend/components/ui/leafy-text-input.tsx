import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyInput(
  { text = "",
    placeholder = "",
    rect = undefined,
    value = undefined,
    onChangeText = undefined,
  }) {

  if (rect && rect.x == "centered" && rect.w)
    rect.x = (screenW - rect.w) / 2;

  const finalStyle = rect ?
    {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h
    } : undefined;

  return (
    <View style={finalStyle}>
      <Text style={styles.whiteText}>{text}</Text>
      <TextInput style={styles.defaultInput} value={value} onChangeText={onChangeText} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultInput: {
    borderRadius: 15,
    height: 56,
    fontSize: 16,
    padding: 10,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(24, 23, 37,0.5)",
  },
  whiteText: {
    color: "white",
    fontFamily: "Inter",
    fontSize: 14,
  },
});