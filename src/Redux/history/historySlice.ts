import { createSlice } from "@reduxjs/toolkit";
import { HistoryState } from "../../types/state";
import { getHistory } from "../../api/history";
import { History } from "../../types";

const initialState: HistoryState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHistory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getHistory.fulfilled, (state, { payload }) => {
      const existingIds = new Set(state.data.map((bean) => bean.mileStoneId));
      const newData = payload.items.filter(
        (item: History) => !existingIds.has(item.mileStoneId)
      );
      state.data = [...state.data, ...newData];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getHistory.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default historySlice.reducer;
