import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
wp(10);

export const filmDetailScreenStyle = {
  yellow14: {
    fontFamily: "sans-serif-condensed",
    fontSize: 14,
    color: "#FED330",
  },
  white14: {
    fontFamily: "sans-serif-condensed",
    fontSize: 14,
    color: "white",
  },
  yellow18: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    color: "#FED330",
  },
  white18: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    color: "white",
  },
  mainScrollView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#181725",
    paddingTop: "10%",
  },
  filmBasicInfo: {
    view: {
      left: wp("6%"),
      top: "25%",
      width: "90%",
      height: 200,
      padding: 0,
    },
    posterView: {
      top: 0,
      width: "40%",
      height: 220,
      backgroundColor: "white",
    },
    infoView: {
      view: {
        position: "absolute",
        top: 0,
        left: "46%",
        width: "55%",
        height: 200,
      },
      title: {
        fontFamily: "sans-serif-condensed",
        fontSize: 18,
        color: "white",
        maxWidth: "100%",
      },
      yearView: {
        flexDirection: "row",
      },
      directorView: {
        flexDirection: "row",
        maxWidth: "100%",
      },
      starsView: {
        flexDirection: "column",
        maxWidth: "100%",
      },
      stars: {
        marginLeft: 15,
      },
      imdbText: {
        top: 25,
        backgroundColor: "#FED53A",
        fontSize: 12,
        height: 18,
        width: 64,
        borderRadius: 9,
        color: "black",
        paddingLeft: 6,
        paddingTop: 1,
      },
    },
    genreCellView: {
      position: "absolute",
      top: hp("36%"),
      left: "2%",
      height: 28,
      alignSelf: "left",
    },
    genreCell: {
      height: 26,
      borderRadius: 22,
      alignSelf: "flex-start",
      paddingLeft: 6,
      paddingRight: 6,
      marginLeft: 6,
      marginRight: 6,
      borderWidth: 1,
      borderColor: "white",
    },
    genreCellText: {
      marginTop: 3,
      fontFamily: "sans-serif-condensed",
      color: "white",
      fontSize: 12,
    }
  },
};