import { createSlice } from "@reduxjs/toolkit";
import {
  getProductByCategory,
  getProductByName,
} from "../../fakeData/ProductsData";

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

      if (state.path === "query") {
        state.product = getProductByName(state.value);
      } else {
        state.product = getProductByCategory(state.value);
      }
    },
  },
});

export const { searchAction } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
