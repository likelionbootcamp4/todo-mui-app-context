import { createContext, useState } from "react";

// Create context
export const TodoContext = createContext(null);
export const TodoHandlerContext = createContext(null);

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, name: "Clean house", done: true },
    { id: 2, name: "Learn Javascript", done: false },
    { id: 3, name: "Clean room", done: false },
    { id: 4, name: "Clean toilet", done: true },
  ]);

  function handleTodoAdd(newTodo) {
    setTodos([...todos, newTodo]);
  }
  function handleTodoDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleTodoEdit(updateTodo) {
    setTodos(
      todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
    );
  }

  function handleTodoStatusChange(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={todos}>
      <TodoHandlerContext.Provider
        value={{
          onTodoAdd: handleTodoAdd,
          onTodoDelete: handleTodoDelete,
          onTodoEdit: handleTodoEdit,
          onTodoStatusChange: handleTodoStatusChange,
        }}
      >
        {children}
      </TodoHandlerContext.Provider>
    </TodoContext.Provider>
  );
}
