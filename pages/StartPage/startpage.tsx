import { ThemedText } from "@/components/ThemedText"
import { Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react"
import { View, Text, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { logOut } from "./loginOut"
import { stylesStartPage as styles } from "./styles.startpage"

export default function StartPage() {
  const navigate = useNavigate()

  return (
    <LinearGradient
      colors={["rgba(0, 98, 128, 0.719)", "transparent", "rgba(0,0,0,0.8)"]}
      style={styles.container}
    >
      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.contentbox}>
        <ThemedText type="subtitle" style={styles.linkFoLoginText}>
          START_PAGE
        </ThemedText>
      </View>
      <Pressable
        style={styles.buttonbox}
        onPress={() => {
          logOut()
          navigate("/login")
        }}
      >
        <ThemedText style={styles.colorWhite}>ВИХІД</ThemedText>
      </Pressable>
    </LinearGradient>
  )
}
