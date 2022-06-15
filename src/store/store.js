import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartSlice'
import { shoppingCardReducer } from './reducers/shoppingCardSlice'
import { sidebarReducer } from './reducers/sidebarSlice'

export const store = configureStore({
  reducer: {
    shoppingCard:shoppingCardReducer,
    sidebar:sidebarReducer,
    cart:cartReducer
  },
  devTools:true,
})