import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todoList, deleteHandler, updateTodo }) => {
  console.log("todoList");
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {/* {todo.title}
          <button onClick={() => deleteHandler(todo.id)}>삭제</button> */}
          <ToDo
            todo={todo}
            deleteHandler={deleteHandler}
            updateTodo={updateTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
