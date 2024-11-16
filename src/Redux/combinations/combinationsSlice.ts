import { createSlice } from "@reduxjs/toolkit";
import { CombinationsState } from "../../types/state";
import { getCombinations } from "../../api/combinations";
import { Combination } from "../../types";

const initialState: CombinationsState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

export const combinationsSlice = createSlice({
  name: "combinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCombinations.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCombinations.fulfilled, (state, { payload }) => {
      const existingIds = new Set(state.data.map((bean) => bean.combinationId));
      const newData = payload.items.filter(
        (item: Combination) => !existingIds.has(item.combinationId)
      );
      state.data = [...state.data, ...newData];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getCombinations.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default combinationsSlice.reducer;
