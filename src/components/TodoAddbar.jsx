import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { TodoHandlerContext } from "../context/TodoContext";

export default function TodoAddBar() {
  const { onTodoAdd } = useContext(TodoHandlerContext);
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <Stack direction="row">
      <TextField
        label="New task"
        variant="outlined"
        value={text}
        onChange={handleInputChange}
        sx={{ flexGrow: 1 }}
      />
      <Button
        variant="contained"
        onClick={() => {
          onTodoAdd({ id: crypto.randomUUID(), name: text, done: false });
          setText("");
        }}
        disabled={text === ""}
      >
        Add
      </Button>
    </Stack>
  );
}
