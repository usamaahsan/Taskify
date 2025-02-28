import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/tasksStore";
import { TaskItem } from "../task-item/task-item";

export const TasksList = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  // Get filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return filter === "Completed" ? task.completed : !task.completed;
  });

  return (
    <Box mt={1} display="flex" height="100%" minHeight="250px">
      {tasks.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography>
            Add a task and click "+" to include it in the list
          </Typography>
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" width="100%">
          {filteredTasks.map((task, _) => {
            return <TaskItem key={task.id} task={task} />;
          })}
        </Box>
      )}
    </Box>
  );
};
