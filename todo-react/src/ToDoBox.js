import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useState } from "react";

const ToDoBox = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn GraphQL" },
    { id: 3, title: "Learn Apollo" },
  ]);

  const addTodo = () => {
    //리스트에 저장하는 함수.
    console.log("todobox의 addTodo 함수 호출!!");
  };
  return (
    <div>
      <ToDoInput addTodoHandler={addTodo} />
      <ToDoList todoList={todoList} />
    </div>
  );
};

export default ToDoBox;