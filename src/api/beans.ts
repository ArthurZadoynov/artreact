import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const getBeans = createAsyncThunk("beans", async (page: number) => {
  const { data } = await instance.get(`/Beans?pageIndex=${page}&pageSize=100`);
  return data;
});
