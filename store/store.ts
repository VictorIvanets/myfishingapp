import { configureStore } from "@reduxjs/toolkit"
import { saveState } from "./storage"
import userSlice from "./login.slice"
import { LOCAL_JWT, LOCAL_LOGIN, LOCAL_USERID } from "./constants"
import locationSlice from "./location.slice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    location: locationSlice,
  },
})

store.subscribe(() => {
  saveState(store.getState().user.jwt, LOCAL_JWT)
  saveState(store.getState().user.login, LOCAL_LOGIN)
  saveState(store.getState().user.userId, LOCAL_USERID)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispath = typeof store.dispatch
