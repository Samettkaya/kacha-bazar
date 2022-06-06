import { configureStore } from '@reduxjs/toolkit'
import { shoppingCardReducer } from './reducers/shoppingCardSlice'

export const store = configureStore({
  reducer: {
    shoppingCard:shoppingCardReducer
  },
  devTools:true,
})