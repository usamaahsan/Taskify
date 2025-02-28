import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./taskbox.css";
import { TasksList } from "../../components/tasks-list/tasks-list";
import { AddTaskField } from "../../components/add-task/add-task-field";
import { TasksFilter } from "../../components/task-filter/tasks-filter";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/tasksStore";

export const Taskbox = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <Box
      className="taskbox"
      sx={{
        width: isSmallDevice ? "100%" : "40%",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">To Do List</Typography>
        <TasksFilter />
      </Box>
      <Divider
        sx={{
          margin: "12px 0px",
        }}
      />
      <Typography variant="h6">Tasks ({tasks.tasks.length})</Typography>
      <TasksList />
      <AddTaskField />
    </Box>
  );
};
