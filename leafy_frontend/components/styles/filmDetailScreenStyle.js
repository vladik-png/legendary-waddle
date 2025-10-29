import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

wp(10);

export const filmDetailScreenStyle = {
  mainScrollView: {
    height: "100%",
    width: "100%",
    backgroundColor: "#181725",
  },
  filmBasicInfo: {
    view: {
      left: wp("5%"),
      top: hp("5%"),
      width: "90%",
      height: 190,
      padding: 0,
    },
    posterView: {
      top: 0,
      width: "38%",
      height: 190,
      backgroundColor: "white",
    },
    infoView: {
      view: {
        position: "absolute",
        top: 0,
        left: "42%",
        width: "55%",
        height: 168,
      },
      title: {
        fontSize: 18,
        color: "white",
        maxWidth: "100%",
      },
      yearView: {
        flexDirection: "row",
        yearYellow: {
          fontSize: 14,
          color: "#FED330",
          maxWidth: "100%",
        },
        yearWhite: {
          fontSize: 14,
          color: "white",
          maxWidth: "100%",
        }
      },
      directorView: {
        flexDirection: "row",
        maxWidth: "100%",
        directorYellow: {
          fontSize: 14,
          color: "#FED330",
        },
        directorWhite: {
          fontSize: 14,
          color: "white",
        }
      },
      imdbText: {
        top: 150,
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
  },
};