import AsyncStorage from "@react-native-async-storage/async-storage"

export async function loadState(key: string): Promise<string | null> {
  try {
    const jsonState = await AsyncStorage.getItem(key)
    if (!jsonState) {
      return null
    }
    jsonState

    return jsonState
  } catch (e) {
    return null
  }
}

export function saveState<T>(state: T, key: string) {
  const stringState = JSON.stringify(state)
  AsyncStorage.setItem(key, stringState)
}
