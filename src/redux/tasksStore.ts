import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";

export const tasksStore = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});

export type RootState = ReturnType<typeof tasksStore.getState>;
export type AppDispatch = typeof tasksStore.dispatch;
