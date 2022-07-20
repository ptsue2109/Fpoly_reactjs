import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, createCate, removeCate, getProductByCate } from "../../services/cate.service";

export const FetchCateList = createAsyncThunk<any, void, { rejectValue: string }>("users/AsyncFetchUserList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAll();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  });


  export const fetchAsyncCategorySelected = createAsyncThunk<{ category: any; products: any[] }, string | undefined, { rejectValue: string }>(
    "attributes/fetchAsyncCategorySelected",
    async (slug, { rejectWithValue }) => {
        try {
            const { data } = await getProductByCate(slug);
            console.log('fetchAsyncCategorySelected',data);
            
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.error);
        }
    }
  );