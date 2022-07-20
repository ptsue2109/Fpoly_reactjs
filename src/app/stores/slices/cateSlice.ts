import {
  FetchCateList
} from "../thunks/cateThunk";
import { createSlice } from "@reduxjs/toolkit";

type categoryState = {
  categories: any[];
  category: any | null;
  products: any[];
  isFetching: boolean;
  errorMessage: string | undefined;
};
const initialState: categoryState = {
  categories: [],
  category: null,
  products: [],
  isFetching: false,
  errorMessage: "",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCateList.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(FetchCateList.fulfilled, (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    });
    builder.addCase(FetchCateList.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });

  },
});

export default categorySlice.reducer;
