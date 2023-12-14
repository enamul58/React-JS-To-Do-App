import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ toDoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map((item) => (
        <ToDoItem
          key={item}
          todoName={item.name}
          todoDate={item.dueDate}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
