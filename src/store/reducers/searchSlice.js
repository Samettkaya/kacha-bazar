import { createSlice } from "@reduxjs/toolkit";
import {  getProductByChildrenCategory, getProductByName, getProductByParentCategory } from "../../fakeData/Products";

const initialState = {
  value: null,
  path: null,
  product: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchAction: (state, action) => {
      state.path = action.payload.path;
      state.value = action.payload.value;
      console.log("state"+state.value)
      if (state.path === "query") {
        state.product = getProductByName(state.value);
      } else {
        state.product =
        state.value.includes("--") === true
        ?  getProductByParentCategory(state.value.split("--").join("&"))
        : getProductByChildrenCategory(state.value.split("-").join(" "))

        
      }
    },
  },
});

export const { searchAction } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
