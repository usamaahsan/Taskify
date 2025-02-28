import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  name: string;
  completed: boolean; // Ensure completed is always defined
}

export type FilterType = "All" | "Completed" | "Pending";

interface TasksState {
  tasks: Task[];
  filter: FilterType;
}

const initialState: TasksState = {
  tasks: [],
  filter: "All", // Default filter
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    AddTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    RemoveTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    UpdateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload; 
      }
    },
    UpdateFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

// Export actions
export const { AddTask, RemoveTask, UpdateTask, UpdateFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
