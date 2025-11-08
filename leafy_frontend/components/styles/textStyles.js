const font = "sans-serif-condensed";

const yellow = {
  fontFamily: font,
  color: "#FED330",
}

const white = {
  fontFamily: font,
  color: "white",
}

const black = {
  fontFamily: font,
  color: "black",
}

const gray = {
  fontFamily: font,
  color: "#ACACAC",
}

export const textStyle = {
  homePageTrandingText: {
    color: "white",
    fontFamily: "sans-serif-condensed",
    fontSize: 22,
    marginLeft: "2%"
  },
  homePageQuoteText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Arial",
    textAlign: "center",
    left: "10%",
    maxWidth: "80%",
  },
  homePageQuoteOriginText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Arial",
    top: "56%",
    right: "14%",
    textAlign: "right",
  },
};

for (let i = 10; i <= 26; ++i) {
  textStyle[`yellow${i}`] = [yellow, { fontSize: i }];
  textStyle[`white${i}`] = [white, { fontSize: i }];
  textStyle[`black${i}`] = [black, { fontSize: i }];
  textStyle[`gray${i}`] = [gray, { fontSize: i }];
}