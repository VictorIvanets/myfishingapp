import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "./login.slice.types"
import { ILocation } from "./location.types"

const initialState: ILocation = {
  latitude: null,
  longitude: null,
}

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.latitude = action.payload.latitude
      state.longitude = action.payload.longitude
    },
  },
})

export default locationSlice.reducer
export const locationActions = locationSlice.actions
