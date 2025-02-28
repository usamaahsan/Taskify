import { Add } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTask } from "../../redux/tasksSlice";

export const AddTaskField = () => {
  const [taskValue, setTaskValue] = useState("");
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (!taskValue) return;
    dispatch(
      AddTask({
        id: `${Date.now()}`,
        name: taskValue,
        completed: false,
      })
    );
    setTaskValue("");
  };

  return (
    <Box display="flex" gap={1} mt={1}>
      <TextField
        value={taskValue}
        onChange={(event) => {
          setTaskValue(event.target.value);
        }}
        fullWidth
        placeholder="Add new Task"
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
      <IconButton onClick={handleButtonClick}>
        <Add
          sx={{
            width: "24px",
            height: "24px",
            color: "black",
          }}
        />
      </IconButton>
    </Box>
  );
};
