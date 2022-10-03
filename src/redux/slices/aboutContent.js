import { createSlice } from '@reduxjs/toolkit'

// Data
import { ABOUTCONTENT } from '../../shared/aboutContent'

export const aboutContentSlice = createSlice({
  name: 'aboutContent',
  initialState: {
    value: []
  },
  reducers: {
    loadAboutContent: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = ABOUTCONTENT
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadAboutContent } = aboutContentSlice.actions

export default aboutContentSlice.reducer