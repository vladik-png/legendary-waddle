import { backgroundStyle } from '@/styles/backgroundStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
wp(10);

const background = backgroundStyle?.darkBlueBackground.backgroundColor

export const actorDetailScreen = {
  grey12: {
    fontFamily: "sans-serif-condensed",
    fontSize: 12,
    color: "#ACACAC",
  },
  yellow12: {
    fontFamily: "sans-serif-condensed",
    fontSize: 12,
    color: "#FED330",
  },
  white12: {
    fontFamily: "sans-serif-condensed",
    fontSize: 12,
    color: "white",
  },
  grey14: {
    fontFamily: "sans-serif-condensed",
    fontSize: 14,
    color: "#ACACAC",
    textAlign: "justify",
    minWidth: "85%",
    maxWidth: "85%",
  },
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
  grey16: {
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    color: "#ACACAC",
  },
  yellow16: {
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    color: "#FED330",
  },
  white16: {
    fontFamily: "sans-serif-condensed",
    fontSize: 16,
    color: "white",
  },
  grey18: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    color: "#ACACAC",
  },
  yellow18: {
    fontFamily: "sans-serif-condensed",
    fontSize: 20,
    color: "#FED330",
    marginBottom: "2%",
  },
  white18: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    color: "white",
  },
  mainScrollView: {
    flex: 1,
    backgroundColor: background,
    padding: "2.5%",
    paddingTop: 0,
  },
  sectionView: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 6,
    paddingTop: 0,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    marginTop: "3%",
  },
  ImageBackground: {
    height: hp("40%"),
    width: "104%",
    marginLeft: "-3%",
    marginRight: "-3%",
    marginTop: "-25%"
  },
  mainView: {
    actorBasicInfo: {
      title: {
        fontFamily: "sans-serif-condensed",
        fontSize: 26,
        color: "white",
        maxWidth: "100%",
        alignSelf: "left",
        marginTop: "5%",
      },
      view: {
        flexDirection: "row",
        marginTop: "3%",
        width: "90%",
        height: 220,
        justifyContent: "space-between"
      },
      posterView: {
        width: "42%",
        height: "100%",
        backgroundColor: "white",
      },
      infoView: {
        view: {
          flexDirection: "column",
          marginLeft: "3%",
          width: "62%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.10)",
          borderRadius: 5,
          padding: "1.5%",
        },
        textInfoView: {
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          borderRadius: 4,
          padding: "1%",
        },
        bdayView: {
          flexDirection: "row",
        },
        genderView: {
          flexDirection: "row",
          maxWidth: "100%",
        },
        starsView: {
          flexDirection: "column",
          maxWidth: "100%",
        },
        stars: {
          marginLeft: 15,
          fontSize: 14,
        },
        imdbText: {
          view: {
            backgroundColor: "#deb522",
            height: 24,
            borderRadius: 5,
            width: 76,
            flexDirection: "column",
            justifyContent: "center"
          },
          text: {
            textAlign: "center",
            fontSize: 14,
            color: "black",
            fontWeight: "bold",
          }
        },
      },
    },
  },
  genreCellView: {
    height: 26,
    alignSelf: "left",
  },
  genreCell: {
    height: 26,
    borderRadius: 8,
    alignSelf: "flex-start",
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  genreCellText: {
    marginTop: 1,
    fontFamily: "sans-serif-condensed",
    color: "white",
    fontSize: 14,
  },
  actionRow: {
    view: {
      marginBottom: "5%",
      marginTop: "15%",
      flexDirection: "row",
      paddingLeft: 2,
      paddingRight: 2,
      height: 42,
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderWidth: 0.5,
      borderColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 12,
    },
    saveBtn: {
      borderRadius: 10,
      borderColor: "rgba(254, 211, 48, 0.3)",
      backgroundColor: "#deb522",
      borderWidth: 0.5,
      height: 36,
      width: 148,
      flexDirection: "row",
      alignItems: "center",
    },
    markAsWatchedBtn: {
      borderRadius: 5,
      borderColor: "rgba(0, 92, 77, 0.4)",
      backgroundColor: "rgba(0, 92, 77, 0.7)",
      borderWidth: 0.5,
      height: 36,
      width: 88,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
    },
    shareBtn: {
      borderRadius: 5,
      borderColor: "rgba(48, 130, 254, 0.3)",
      backgroundColor: "rgba(48, 130, 254, 1)",
      borderWidth: 0.5,
      height: 36,
      width: 64,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
    }
  }
};