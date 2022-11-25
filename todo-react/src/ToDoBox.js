import { useState, useRef } from "react";

import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoBox = () => {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "리액트 공부하기" },
    { id: 2, title: "물마시기" },
    { id: 3, title: "봄봄이랑 놀아주기" },
  ]);

  const nextId = useRef(4);
  const addToDoHandler = (toDo) => {
    // console.log(toDo);
    const newToDo = {
      id: nextId.current,
      title: toDo,
    };
    setToDoList([...toDoList, newToDo]);
    nextId.current += 1;
  };

  const deleteHandler = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };
  return (
    <div>
      <ToDoInput addToDoHandler={addToDoHandler} />
      <ToDoList toDoList={toDoList} deleteHandler={deleteHandler} />
    </div>
  );
};

export default ToDoBox;
