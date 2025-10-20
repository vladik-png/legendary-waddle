import LeafyTextInput from "@/components/ui/leafy-text-input";
import React from "react";
import { Dimensions, View } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyCodeInput({
  cellsQuantity = 0,
  rect = {},
  cellsPadding = 0,
  borderRadius = 0,
  borderColor = "",
  navigation
}: any) {

  rect.x = typeof rect.x === "string" ? parseFloat(rect.x) / 100 * screenW : rect.x;
  rect.y = typeof rect.y === "string" ? parseFloat(rect.y) / 100 * screenH : rect.y;
  rect.w = typeof rect.w === "string" ? parseFloat(rect.w) / 100 * screenW : rect.w;
  rect.h = typeof rect.h === "string" ? parseFloat(rect.h) / 100 * screenH : rect.h;

  let cells = [];
  const cellsW = (rect.w - cellsPadding * (cellsQuantity - 1)) / cellsQuantity;
  for (let i = 0; i < cellsQuantity; ++i) {
    cells.push(<LeafyTextInput key={i} style={{ borderColor, borderRadius, borderWidth: 2, textAlign: "center" }}
      maxLength={1} rect={{ x: (rect.x + (cellsW + (i ? cellsPadding : 0)) * i), y: rect.y, w: cellsW, h: rect.h }} />);
  }

  return (
    <View style={{ borderColor: "white", borderWidth: 4, flexDirection: "row" }}>
      {cells}
    </View>
  );
}