import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import LeafyContinueButton from "./leafy-continue-button";

const { width: screenW, height: screenH } = Dimensions.get("window");

const hints = [{
  header: "Track your books and movies",
  content: "Keep a track of the books and movies you have read or un watched",
  btnText: "Continue",
  img: require("@/assets/images/onBoard_1.png"),
},
{
  header: "Chat around books and movies",
  content: "Join discussions and chats around your favourite books and movies",
  btnText: "Continue",
  img: require("@/assets/images/onBoard_2.png"),
},
{
  header: "Rate and review books and movies",
  content: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  btnText: "Get Started",
  img: require("@/assets/images/onBoard_3.png"),
},
];

export default function LeafyCarousel({
  rect = {}, navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const goNext = () => {
    const nextIndex = Math.min(currentIndex + 1, hints.length + 1);
    if (currentIndex === hints.length - 1) {
      navigation.navigate("Login");
      return;
    }

    flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true, viewPosition: 0.5 });
    setCurrentIndex(nextIndex);
  };

  if (rect && rect.x == "centered")
    rect.x = (screenW - rect.w) / 2;

  const finalStyle = rect
    ? [styles.container, {
      position: "absolute",
      left: rect.x,
      top: rect.y,
      width: rect.w,
      height: "100%",
    }] : styles.container;

  return (
    <View style={finalStyle}>
      <Image
        source={hints[currentIndex].img}
        style={{ width: "100%", height: 380, resizeMode: "contain", margin: 0, padding: 0 }} />
      <FlatList
        ref={flatListRef}
        data={hints}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.hintBox, { width: rect.w, height: rect.h }]}>
            <View style={styles.dots}>
              {hints.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    i === currentIndex ? styles.activeDot : null,
                  ]}
                />
              ))}
            </View>
            <Text style={styles.hintTextHeader}>{hints[currentIndex].header}</Text>
            <Text style={styles.hintTextContent}>{hints[currentIndex].content}</Text>
            <LeafyContinueButton onPress={goNext} text={hints[currentIndex].btnText} style={{
              width: 200,
              height: 56,
              marginTop: 50,
            }} />
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  hintBox: {
    backgroundColor: "#181725",
    borderRadius: 15,
    paddingHorizontal: "8%",
    alignItems: "center"
  },
  hintTextHeader: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  hintTextContent: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  dots: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#005C4D",
    marginHorizontal: 5,
  },
});
