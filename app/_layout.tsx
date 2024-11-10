import { StatusBar, StyleSheet, View, Text, Image } from "react-native"
import { useFonts } from "expo-font"
import { Slot, Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"
import App from "../pages/loadPage/LoadPage"
import { NativeRouter } from "react-router-native"
import { RoutesView } from "./routes"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    Raleway: require("../assets/fonts/Raleway-VariableFont_wght.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayLight: require("../assets/fonts/Raleway-Light.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayItalic: require("../assets/fonts/Raleway-Italic.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("@/assets/images/fonfish.jpg")}
        style={styles.maifon}
      />
      <NativeRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <RoutesView />
      </NativeRouter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004050",
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
