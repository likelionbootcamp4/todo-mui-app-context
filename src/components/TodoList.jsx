import { List } from "@mui/material";
import TodoRow from "./TodoRow";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoList({ status, search }) {
  const todos = useContext(TodoContext);

  let filterTodos;
  if (status === "all") {
    filterTodos = todos;
  } else if (status === "done") {
    filterTodos = todos.filter((todo) => todo.done);
  } else if (status === "undone") {
    filterTodos = todos.filter((todo) => !todo.done);
  }

  return (
    <List>
      {filterTodos
        .filter((todo) =>
          todo.name.toLowerCase().startsWith(search.toLowerCase())
        )
        .map((todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
    </List>
  );
}
