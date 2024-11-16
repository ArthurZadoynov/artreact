import { createSlice } from "@reduxjs/toolkit";
import { FactsState } from "../../types/state";
import { getFacts } from "../../api/facts";
import { Fact } from "../../types";

const initialState: FactsState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

export const beansSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFacts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getFacts.fulfilled, (state, { payload }) => {
      const existingIds = new Set(state.data.map((bean) => bean.factId));
      const newData = payload.items.filter(
        (item: Fact) => !existingIds.has(item.factId)
      );
      state.data = [...state.data, ...newData];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getFacts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beansSlice.reducer;
