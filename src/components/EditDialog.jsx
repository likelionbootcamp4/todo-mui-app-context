import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { TodoHandlerContext } from "../context/TodoContext";

export default function EditDialog({ todo, onClose, open }) {
  const { onTodoEdit } = useContext(TodoHandlerContext);
  const [text, setText] = useState(todo.name);

  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={text}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setText(todo.name);
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onTodoEdit({ ...todo, name: text });
            onClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
