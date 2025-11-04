import { widthPercentageToDP as wp } from "react-native-responsive-screen"

export const explorePageStyle = {
  collectionView: {
    view: {
      flexDirection: "column",
      marginTop: "5%",
      borderRadius: 10
    },
    scrollView: {
      padding: 4,
      borderWidth: 1,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 8
    },
    title: {
      color: "white",
      fontSize: 20,
      margin: "2%"
    },
    item: {
      marginRight: 5,
      width: wp("32%"),
      height: wp("32%"),
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.05)",
      padding: 4,
    }
  },
}