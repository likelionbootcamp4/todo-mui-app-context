import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import DeleteAction from "./DeleteAction";
import EditAction from "./EditAction";
import { useContext } from "react";
import { TodoHandlerContext } from "../context/TodoContext";

export default function TodoRow({ todo }) {
  const { onTodoStatusChange } = useContext(TodoHandlerContext);
  return (
    <ListItem
      secondaryAction={
        <Stack direction="row">
          <EditAction todo={todo} />
          <DeleteAction todo={todo} />
        </Stack>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={todo.done}
            onChange={() => onTodoStatusChange(todo.id)}
          />
        </ListItemIcon>
        <ListItemText
          primary={todo.name}
          sx={{ textDecoration: todo.done ? "line-through" : "none" }}
        />
      </ListItemButton>
    </ListItem>
  );
}
