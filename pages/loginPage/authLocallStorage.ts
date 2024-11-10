import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "@/store/constants"

export const locallStoreSetData = async (
  login: string,
  userid: string = "",
  jwt: string = ""
) => {
  try {
    await AsyncStorage.setItem(LOCAL_LOGIN, login)
    await AsyncStorage.setItem(LOCAL_JWT, jwt)
    await AsyncStorage.setItem(LOCAL_USERID, userid)
  } catch (error) {}
}
