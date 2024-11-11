import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "./login.slice.types"

const initialState: UserState = {
  jwt: null,
  login: null,
  userId: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.jwt = action.payload.jwt
      state.login = action.payload.login
      state.userId = action.payload.userId
    },
    logout: (state) => {
      state.jwt = null
      state.login = null
      state.userId = null
    },
  },
})

export default userSlice.reducer
export const userActions = userSlice.actions
