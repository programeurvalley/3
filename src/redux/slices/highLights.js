import { createSlice } from '@reduxjs/toolkit'

// Data
import { HIGHLIGHTS } from '../../shared/highlights';

export const highLightsSlice = createSlice({
  name: 'highLights',
  initialState: {
    value: []
  },
  reducers: {
    loadHighLights: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = HIGHLIGHTS
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadHighLights } = highLightsSlice.actions

export default highLightsSlice.reducer