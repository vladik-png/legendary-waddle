import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
wp(10);

export const filmDetailScreenStyle = {
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
    backgroundColor: "#181725",
    padding: "2.5%",
    paddingTop: 0,
  },
  mainView: {
    filmBasicInfo: {
      title: {
        fontFamily: "sans-serif-condensed",
        fontSize: 26,
        color: "white",
        maxWidth: "100%",
        alignSelf: "left",
        marginTop: "5%",
        opacity: 1,
      },
      view: {
        flexDirection: "row",
        marginTop: "5%",
        width: "90%",
        height: 200,
        padding: 0,
      },
      posterView: {
        width: "42%",
        height: 220,
        backgroundColor: "white",
      },
      infoView: {
        view: {
          marginLeft: "47%",
          width: "55%",
          height: 220,
        },
        textInfoView: {
          flexDirection: "column",
          marginLeft: "5%",
          width: "55%",
          height: 220,
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
          fontSize: 14,
        },
        imdbText: {
          marginTop: "15%",
          backgroundColor: "#FED53A",
          fontSize: 14,
          height: 24,
          borderRadius: 5,
          width: 76,
          color: "black",
          paddingTop: 2,
          fontWeight: "bold",
          textAlign: "center",
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
      paddingLeft: 4,
      paddingRight: 4,
      height: 46,
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.09)",
      borderRadius: 8,
    },
    saveBtn: {
      borderRadius: 5,
      backgroundColor: "rgba(254, 211, 48, 0.4)",
      borderColor: "rgba(254, 211, 48, 1)",
      borderWidth: 1,
      height: 36,
      width: 64,
      flexDirection: "row",
      alignItems: "center",
    },
    markAsWatchedBtn: {
      borderRadius: 5,
      backgroundColor: "rgba(0, 92, 77, 0.4)",
      borderColor: "rgba(0, 92, 77, 1)",
      borderWidth: 1,
      height: 36,
      width: 150,
      flexDirection: "row",
      alignItems: "center",
    },
    shareBtn: {
      borderRadius: 5,
      backgroundColor: "rgba(48, 130, 254, 0.4)",
      borderColor: "rgba(48, 130, 254, 1)",
      borderWidth: 1,
      height: 36,
      width: 64,
      flexDirection: "row",
      alignItems: "center",
    }
  }
};