import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'open',
  initialState,
  reducers: {
   
    sidebarAction: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { sidebarAction } = sidebarSlice.actions

export const sidebarReducer= sidebarSlice.reducer