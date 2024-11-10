import { StyleSheet } from "react-native"

export const stylesStartPage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    borderRadius: 7,
    backgroundColor: "#071a22ba",
    marginTop: 30,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  linkFoLogin: {
    width: 120,
    height: 50,
  },
  linkFoLoginText: {
    textAlign: "center",
    color: "#8accdd",
  },
  contentbox: {
    flex: 1,
  },
  appLogoBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogo: {
    height: 108,
    width: 200,
    bottom: 0,
    position: "absolute",
  },
  maifon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
})
