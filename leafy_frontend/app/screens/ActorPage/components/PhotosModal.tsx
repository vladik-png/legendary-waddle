import { textStyle } from "@/styles/textStyles";
import React, { useState } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";

export default function PhotosModal({ images, backdrop }: { images: any[], backdrop: string[] }) {
  const [open, setOpen] = useState(false);
  const [currImg, setCurrImg] = useState({})

  const imageHeight = 124;

  return (
    <>
      <View style={{ maxHeight: 500, maxWidth: "100%", marginTop: "5%", marginBottom: 80, backgroundColor: "rgba(255, 255, 255, 0.05)", padding: 6, paddingTop: 0, borderWidth: 0.5, borderColor: "rgba(255, 255, 255, 0.2)", borderRadius: 12 }}>
        <Text style={[textStyle.yellow18]}>{`Photos ${images?.length + backdrop?.length}`}</Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            images?.map((image: any, index: number) => (
              <Pressable key={index} onPress={() => { setOpen(true); setCurrImg({ path: image?.file_path, h: imageHeight, w: imageHeight * image?.aspect_ratio }); }}
                style={{ height: imageHeight, width: imageHeight * image?.aspect_ratio, borderRadius: 4, marginRight: 5 }}  >
                <Image
                  source={{ uri: "https://image.tmdb.org/t/p/w200" + image?.file_path }}
                  style={{ width: "100%", height: "100%" }}
                />
              </Pressable>
            ))
          }
        </ScrollView>
        <ScrollView horizontal={true}
          style={{ marginTop: "3%" }}
          showsHorizontalScrollIndicator={false}
        >
          {
            backdrop?.map((back: string, index: number) => {
              const [h, w] = [120, 220];
              return (
                < Pressable key={index} onPress={() => { setOpen(true); setCurrImg({ path: back, h, w }); }}
                  style={{ height: h, width: w, borderRadius: 4, marginRight: 5 }}  >
                  <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w300" + back }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Pressable>
              )
            })
          }
        </ScrollView>
      </View>

      <Modal visible={open} transparent={true} animationType="slide">
        <View style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <View style={{
            width: "90%",
            backgroundColor: "#0F0E1A",
            padding: 15,
            borderRadius: 12,
            maxHeight: "80%"
          }}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500" + currImg?.path }} style={{ minHeight: currImg?.h, minWidth: "90%", maxHeight: "90%", maxWidth: "90%", alignSelf: "center" }} />

            <Pressable style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginTop: 10, justifyContent: "center", width: "40%", alignSelf: "center", height: 42, borderRadius: 6 }}
              onPress={() => setOpen(false)}>
              <Text style={[textStyle.yellow22, { textAlign: "center" }]}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}