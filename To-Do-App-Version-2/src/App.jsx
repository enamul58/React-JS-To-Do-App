import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import ToDoItem from "./components/ToDoItem";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Vagetables",
      dueDate: "14-12-2023",
    },
    {
      name: "Go to college",
      dueDate: "14-12-2023",
    },
    {
      name: "Shoping",
      dueDate: "14-12-2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo />
      <ToDoItems toDoItems={todoItems} />
    </center>
  );
}

export default App;
