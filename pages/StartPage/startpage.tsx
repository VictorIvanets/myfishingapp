import { ThemedText } from "@/components/ThemedText"
import { Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react"
import { View, Text, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { logOut } from "./loginOut"
import { stylesStartPage as styles } from "./styles.startpage"
import { useDispatch, useSelector } from "react-redux"
import { AppDispath, RootState } from "@/store/store"
import { userActions } from "@/store/login.slice"

export default function StartPage() {
  const navigate = useNavigate()
  const { login, userId } = useSelector((s: RootState) => s.user)
  const dispatch = useDispatch<AppDispath>()

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
        {
          <ThemedText type="subtitle" style={styles.linkFoLoginText}>
            {login}
          </ThemedText>
        }
        <ThemedText type="subtitle" style={styles.linkFoLoginText}>
          {userId}
        </ThemedText>
      </View>
      <Pressable
        style={styles.buttonbox}
        onPress={() => {
          dispatch(userActions.logout())
          logOut()
          navigate("/login")
        }}
      >
        <ThemedText style={styles.colorWhite}>ВИХІД</ThemedText>
      </Pressable>
    </LinearGradient>
  )
}
