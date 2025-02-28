import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Task } from "../../redux/tasksSlice";
import { CheckCircle, CircleOutlined, Delete, Edit } from "@mui/icons-material";
import { RemoveTask, UpdateTask } from "../../redux/tasksSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [status, setStatus] = useState(
    task.completed ? "Completed" : "Pending"
  );

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const updatedText = formJson.updateTaskField;
    dispatch(
      UpdateTask({
        ...task,
        name: updatedText,
        completed: status === "Completed" ? true : false,
      })
    );
    handleDialogClose();
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <Box display="flex" gap={1}>
            <IconButton edge="end" onClick={() => setIsDialogOpen(true)}>
              <Edit />
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => {
                dispatch(RemoveTask(task.id));
              }}
            >
              <Delete />
            </IconButton>
          </Box>
        }
      >
        <ListItemIcon>
          {task.completed ? (
            <CheckCircle
              sx={{
                color: "green",
              }}
            />
          ) : (
            <CircleOutlined
              sx={{
                color: "red",
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText primary={task.name} />
      </ListItem>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) =>
              onUpdate(event),
          },
        }}
      >
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <Box display="flex" gap={1}>
            <TextField
              required
              id="name"
              name="updateTaskField"
              defaultValue={task.name}
              type="text"
              fullWidth
              variant="filled"
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "10px",
                  height: "50px",
                  "& input": {
                    padding: 0,
                  },
                },
              }}
            />
            <Select
              size="small"
              value={status}
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <MenuItem value={"Completed"}>Completed</MenuItem>
              <MenuItem value={"Pending"}>Pending</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
