import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "@/store/constants"

export const logOut = async () => {
  try {
    await AsyncStorage.removeItem(LOCAL_LOGIN)
    await AsyncStorage.removeItem(LOCAL_JWT)
    await AsyncStorage.removeItem(LOCAL_USERID)
  } catch (error) {}
}
