import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartSlice'
import { searchReducer } from './reducers/searchSlice'
import { shoppingCardReducer } from './reducers/shoppingCardSlice'
import { sidebarReducer } from './reducers/sidebarSlice'

export const store = configureStore({
  reducer: {
    shoppingCard:shoppingCardReducer,
    sidebar:sidebarReducer,
    cart:cartReducer,
    search:searchReducer
  },
  devTools:true,
})