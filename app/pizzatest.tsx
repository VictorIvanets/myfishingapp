import { ThemedText } from "@/components/ThemedText"
import React, { useEffect, useState } from "react"
import { Text, TextInput, View, StyleSheet, Image, Button } from "react-native"

export default function PizzaTranslator() {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [validInput, setValidInput] = useState("")

  useEffect(() => {
    if (loginInput.length > 2 && passwordInput.length > 2) {
      setValidInput("")
    }
  }, [loginInput, passwordInput, setValidInput])

  const onSubmit = () => {
    if (loginInput.length < 2 && passwordInput.length < 2) {
      setValidInput("заповніть всі поля")
    } else if (loginInput.length < 3) {
      setValidInput("логін повинен бути не менше 3х символів")
    } else if (passwordInput.length < 3) {
      setValidInput("пароль повинен бути не менше 3х символів")
    } else {
      console.log(loginInput)
      console.log(passwordInput)
      setLoginInput("")
      setPasswordInput("")
    }
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.submitbox}>
        <ThemedText style={styles.colorWhiteMB30} type="subtitle">
          ВХІД
        </ThemedText>
        {validInput ? (
          <ThemedText style={styles.colorWhite} type="default">
            {validInput}
          </ThemedText>
        ) : (
          <ThemedText style={styles.colorWhite} type="default"></ThemedText>
        )}

        <View style={styles.inputpass}>
          <TextInput
            style={styles.input}
            // placeholder="login"
            onChangeText={(t) => {
              setLoginInput(t)
            }}
            value={loginInput}
          />
          <ThemedText style={styles.colorWhite} type="default">
            login
          </ThemedText>
        </View>

        <View style={styles.inputpass}>
          <TextInput
            style={styles.input}
            // placeholder="password"
            onChangeText={(t) => setPasswordInput(t)}
            value={passwordInput}
          />
          <ThemedText style={styles.colorWhite} type="default">
            password
          </ThemedText>
        </View>
        <View style={styles.buttonbox}>
          <Button onPress={onSubmit} color="none" title="ВХІД"></Button>
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
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
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
  colorWhiteMB30: {
    color: "white",
    marginBottom: 30,
  },
  colorWhite: {
    color: "white",
    textAlign: "center",
  },
  input: {
    color: "rgba(255, 255, 255, 0.8)",
    height: 40,
    backgroundColor: "none",
    padding: 10,
    fontSize: 20,
    width: "100%",
  },
  inputpass: {
    width: "80%",
    height: 40,
    borderColor: "rgba(0, 98, 128, 0.0)",
    borderBottomColor: "rgba(0, 98, 128, 0.9)",
    borderWidth: 3,
    backgroundColor: "rgba(0, 98, 128, 0.301)",
    marginBottom: 30,
    borderRadius: 7,
  },
  buttonbox: {
    textAlign: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 7,
    backgroundColor: "rgba(0, 36, 59, 0.5)",
  },
  maifon: {
    width: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  appLogoBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  appLogo: {
    height: 108,
    width: 200,
    bottom: 0,
    position: "absolute",
  },
})
