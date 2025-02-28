import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { FilterType, UpdateFilter } from "../../redux/tasksSlice";
import { RootState } from "../../redux/tasksStore";

export const TasksFilter = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  // Function to change filter
  const handleFilterChange = (newFilter: FilterType) => {
    dispatch(UpdateFilter(newFilter));
  };

  return (
    <Box display="flex">
      <Button
        onClick={() => handleFilterChange("All")}
        variant={tasks.filter === "All" ? "outlined" : "text"}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange("Completed")}
        variant={tasks.filter === "Completed" ? "outlined" : "text"}
      >
        Completed
      </Button>
      <Button
        onClick={() => handleFilterChange("Pending")}
        variant={tasks.filter === "Pending" ? "outlined" : "text"}
      >
        Pending
      </Button>
    </Box>
  );
};
