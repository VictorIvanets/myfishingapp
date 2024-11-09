import { ThemedText } from "@/components/ThemedText"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Alert } from "react-native"
import * as Location from "expo-location"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"

export default function App() {
  const [location, setLocation] = useState<Location.LocationObjectCoords>()
  const [errorMsg, setErrorMsg] = useState("")

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Не можу визначити локацію")
        return
      }
      const { coords } = await Location.getCurrentPositionAsync({})
      setLocation(coords)
    } catch {
      Alert.alert("Не можу визначити локацію")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  let text = "Waiting.."
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = "location ok"
  }

  return (
    <LinearGradient
      colors={["rgba(0, 98, 128, 0.719)", "transparent", "rgba(0,0,0,0.8)"]}
      style={styles.container}
    >
      <StatusBar style="inverted" />
      <Image
        source={require("@/assets/images/fonfish.jpg")}
        style={styles.maifon}
      />

      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.contentbox}>
        {text ? (
          <ThemedText style={styles.colorWhite} type="default">
            {text}
          </ThemedText>
        ) : (
          <View>
            <ThemedText style={styles.colorWhite} type="default">
              {location?.latitude}
            </ThemedText>
          </View>
        )}
        <View style={styles.linkFoLogin}>
          <Link style={styles.linkFoLoginText} href="/loginpage">
            LOGIN
          </Link>
          <Link style={styles.linkFoLoginText} href="./pizzatest">
            PIZZA
          </Link>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
