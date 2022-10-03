import { createSlice } from '@reduxjs/toolkit'

// Data
import { FAQ } from '../../shared/faq'

export const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    value: []
  },
  reducers: {
    loadFaq: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = FAQ
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadFaq } = faqSlice.actions

export default faqSlice.reducer