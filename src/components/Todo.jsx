import { useState } from "react";
import TodoAddBar from "./TodoAddbar";
import TodoList from "./TodoList";
import TodoSelect from "./TodoSelect";
import { Box, Container } from "@mui/material";
import TodoProvider from "../context/TodoContext";

export default function Todo() {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("clean");

  function handleStatusSelectChange(newStatus) {
    setStatus(newStatus);
  }

  return (
    <TodoProvider>
      <Box mt={6}>
        <Container maxWidth="sm">
          <TodoSelect
            onStatusSelectChange={handleStatusSelectChange}
            status={status}
          />
          <TodoAddBar />
          <TodoList status={status} search={search} />
        </Container>
      </Box>
    </TodoProvider>
  );
}
