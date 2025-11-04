import React from "react";
import { Image, ImageBackground, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomBar from "../bars/bottomBar";
import { explorePageStyle } from "./styles";

import { inputStyle } from "@/components/styles/inputStyle";
import { viewStyle } from "@/components/styles/viewStyle";

export default function ExploreScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("@/assets/images/background.png")} style={viewStyle.imageBackground}>

        <TextInput onPressIn={() => navigation.navigate("SearchScreen")} style={inputStyle.defaultInput} placeholderTextColor={"rgba(255, 255, 255, 0.6)"} placeholder="Enter request" />

        <View style={explorePageStyle.collectionView.view}>
          <Text style={explorePageStyle.collectionView.title}>Top Search</Text>

          <ScrollView horizontal={true} style={explorePageStyle.collectionView.scrollView}>
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
          </ScrollView>
        </View>


        <View style={explorePageStyle.collectionView.view}>
          <Text style={explorePageStyle.collectionView.title}>Your Collections</Text>

          <ScrollView horizontal={true} style={explorePageStyle.collectionView.scrollView}>
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
            <Image source={require("@/assets/images/noPhoto.png")} style={explorePageStyle.collectionView.item} />
          </ScrollView>
        </View>

        <View style={explorePageStyle.collectionView.view}>
          <Text style={explorePageStyle.collectionView.title}>Top Collections</Text>

          <ScrollView horizontal={true} style={explorePageStyle.collectionView.scrollView}>
            <Pressable style={explorePageStyle.collectionView.item}
              onPress={() => {
                console.log("collection: comedy")
                navigation.navigate("CollectionScreen", { collection: "comedy" })
              }}>
              <Image source={require("@/assets/images/collections/50comedyCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50crimeCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50actionCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50adventureCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50animationCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50documentaryCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50dramaCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50familyCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
            <Pressable style={explorePageStyle.collectionView.item}>
              <Image source={require("@/assets/images/collections/50fantasyCollection.png")} style={{ width: "100%", height: "100%", borderRadius: 4 }} />
            </Pressable>
          </ScrollView>
        </View>
      </ImageBackground>
      <BottomBar />
    </View>
  );
}