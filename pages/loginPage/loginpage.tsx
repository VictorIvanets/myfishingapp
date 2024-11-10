import { ThemedText } from "@/components/ThemedText"
import React, { useEffect, useState } from "react"
import { TextInput, View, Image, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { getlogin } from "./authGet"
import { locallStoreSetData } from "./authLocallStorage"
import { styles } from "./styles.loginpage"

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [validInput, setValidInput] = useState("")
  const [viewLabelLogin, setViewLabelLogin] = useState(true)
  const [viewLabelPass, setViewLabelPass] = useState(true)
  const [errorAuth, setErrorAuth] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (errorAuth) setErrorAuth("")
    if (loginInput.length > 2 && passwordInput.length > 2) {
      setValidInput("")
    }
  }, [loginInput, passwordInput, setValidInput])

  useEffect(() => {
    if (loginInput.length > 0) setViewLabelLogin(false)
    else setViewLabelLogin(true)

    if (passwordInput.length > 0) setViewLabelPass(false)
    else setViewLabelPass(true)
  }, [loginInput, passwordInput])

  const onSubmit = async () => {
    if (loginInput.length < 2 && passwordInput.length < 2) {
      setValidInput("заповніть всі поля")
    } else if (loginInput.length < 3) {
      setValidInput("логін повинен бути не менше 3х символів")
    } else if (passwordInput.length < 3) {
      setValidInput("пароль повинен бути не менше 3х символів")
    } else {
      const data = await getlogin(loginInput, passwordInput)
      if (data.message) setErrorAuth(data.message)
      else {
        locallStoreSetData(data.login, data.userId, data.access_token)
        setLoginInput("")
        setPasswordInput("")
        navigate("/startpage")
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.appLogoBox}>
        <Image
          source={require("@/assets/images/logoMf-01.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.submitbox}>
        <View style={styles.buttonboxback}>
          <Pressable onPress={() => navigate("/")}>
            <ThemedText style={styles.colorWhite}>BACK</ThemedText>
          </Pressable>
        </View>
        {validInput ? (
          <ThemedText style={styles.colorWhite} type="default">
            {validInput}
          </ThemedText>
        ) : errorAuth ? (
          <ThemedText style={styles.colorWhite} type="default">
            {errorAuth}
          </ThemedText>
        ) : (
          <ThemedText style={styles.colorWhite} type="default"></ThemedText>
        )}

        <View style={styles.inputpass}>
          <TextInput
            style={styles.input}
            onChangeText={(t) => {
              setLoginInput(t)
            }}
            value={loginInput}
          />
          <View style={styles.inputBottoLine}></View>
          <ThemedText
            style={viewLabelLogin ? styles.inputLabel : styles.inputLabelActiv}
            type="subtitlelite"
          >
            login
          </ThemedText>
        </View>

        <View style={styles.inputpass}>
          <TextInput
            style={styles.input}
            onChangeText={(t) => setPasswordInput(t)}
            value={passwordInput}
          />
          <View style={styles.inputBottoLine}></View>

          <ThemedText
            style={viewLabelPass ? styles.inputLabel : styles.inputLabelActiv}
            type="subtitlelite"
          >
            password
          </ThemedText>
        </View>
        <Pressable style={styles.buttonbox} onPress={onSubmit}>
          <ThemedText style={styles.colorWhite}>ВХІД</ThemedText>
        </Pressable>
      </View>
    </View>
  )
}