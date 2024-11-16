import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beansSlice from "./beans/beansSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import factsSlice from "./facts/factsSlice";
import historySlice from "./history/historySlice";
import recipesSlice from "./recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    beans: beansSlice,
    facts: factsSlice,
    recipes: recipesSlice,
    combinations: combinationsSlice,
    history: historySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
