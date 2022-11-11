import { useState, useRef } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoBox = () => {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "할일 111" },
    { id: 2, title: "할일 2222" },
    { id: 3, title: "할일 3333" },
  ]);
  const nextId = useRef(4);
  const addToDoHandler = (toDo) => {
    console.log("todobox ::" + toDo);
    const newTodo = {
      id: nextId.current++,
      title: toDo,
    };
    setToDoList([...toDoList, newTodo]);
  };
  return (
    <div>
      <ToDoInput addToDoHandler={addToDoHandler} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default ToDoBox;
