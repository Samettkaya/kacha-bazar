import { configureStore } from '@reduxjs/toolkit'
import { shoppingCardReducer } from './reducers/shoppingCardSlice'
import { sidebarReducer } from './reducers/sidebarSlice'

export const store = configureStore({
  reducer: {
    shoppingCard:shoppingCardReducer,
    sidebar:sidebarReducer
  },
  devTools:true,
})