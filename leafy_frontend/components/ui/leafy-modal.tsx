import React from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";

const { width: screenW, height: screenH } = Dimensions.get("window");

export default function LeafyModal({ onClose, visible, rect = {}, navigation, children }: any) {


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
  let finalStyle = rect ? [
    styles.defaultModal, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: rect.h,
      transform
    }
  ] : styles.defaultModal;

  return (
    <Modal transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={finalStyle}>
          {children}
        </View>
      </View>
    </Modal >);
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultModal: {
    backgroundColor: "#181725",
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  }
});