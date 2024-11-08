import { ThemedText } from "@/components/ThemedText"
import { StyleSheet, View, Text, StatusBar, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/fonfish.jpg")}
        style={styles.maifon}
      />
      <ThemedText> Start </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#004050",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
