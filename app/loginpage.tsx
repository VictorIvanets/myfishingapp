import { ThemedText } from "@/components/ThemedText"
import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, Image, Button, TextInput } from "react-native"

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  //   const [validInput, setValidInput] = useState("")

  //   useEffect(() => {
  //     if (loginInput.length > 2 && passwordInput.length > 2) {
  //       setValidInput("")
  //     }
  //   }, [loginInput, passwordInput, setValidInput])

  //   const onSubmit = () => {
  //     if (loginInput.length < 2 && passwordInput.length < 2) {
  //       setValidInput("заповніть всі поля")
  //     } else if (loginInput.length < 3) {
  //       setValidInput("логін повинен бути не менше 3х символів")
  //     } else if (passwordInput.length < 3) {
  //       setValidInput("пароль повинен бути не менше 3х символів")
  //     } else {
  //       console.log(loginInput)
  //       console.log(passwordInput)
  //       setLoginInput("")
  //       setPasswordInput("")
  //     }
  //   }

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Image
        source={require("@/assets/images/fonfish.jpg")}
        style={styles.maifon}
      />
      <View style={styles.submitbox}>
        <ThemedText style={styles.colorWhiteMB40} type="subtitle">
          LOG IN
        </ThemedText>
        {/* {validInput ? (
          <ThemedText style={styles.colorWhite} type="default">
            {validInput}
          </ThemedText>
        ) : (
          <ThemedText style={styles.colorWhite} type="default"></ThemedText>
        )} */}
        <View style={styles.inputpass}>
          {/* <TextInput
            // onChangeText={setLoginInput}
            // value={loginInput}
            // placeholder="login"
            style={styles.input}
          /> */}
        </View>

        <View style={styles.inputpass}>
          {/* <TextInput
            // onChangeText={setPasswordInput}
            // value={passwordInput}
            // placeholder="password"
            style={styles.input}
          /> */}
        </View>

        {/* <View style={styles.buttonbox}>
          <Button onPress={onSubmit} color="none" title="ВХІД"></Button>
        </View> */}
      </View>
      <View style={styles.backbox}>
        <View style={styles.buttonbox}>
          <Link style={styles.linkFoLoginText} href="/">
            BACK
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linkFoLoginText: {
    textAlign: "center",
    color: "#8accdd",
  },
  submitbox: {
    width: "100%",
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  backbox: {
    flex: 1,
  },

  titleContainer: {
    backgroundColor: "red",
    flex: 1,
    gap: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "black",
    flex: 9,
    gap: 8,
    padding: 10,
  },
  colorWhiteMB40: {
    color: "white",
    marginBottom: 60,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  input: {
    color: "white",
    width: "100%",
    height: 40,
    backgroundColor: "none",
    padding: 10,
    fontSize: 25,
    fontWeight: 100,
  },
  inputpass: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "rgba(0, 98, 128, 0.0)",
    borderBottomColor: "rgba(0, 98, 128, 0.9)",
    borderWidth: 3,
    backgroundColor: "rgba(0, 98, 128, 0.301)",
    marginBottom: 30,
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 25,
    backgroundColor: "rgba(0, 36, 59, 0.5)",
  },
  maifon: {
    width: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
})
