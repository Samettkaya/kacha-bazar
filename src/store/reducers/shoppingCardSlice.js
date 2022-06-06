import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const shoppingCardSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
   
    shoppingCardAction: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { shoppingCardAction } = shoppingCardSlice.actions

export const shoppingCardReducer= shoppingCardSlice.reducer