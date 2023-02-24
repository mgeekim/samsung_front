import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

import { useState, useRef } from "react";

const ToDoBox = () => {
  console.log("todoBox ✌✌");
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn GraphQL" },
    { id: 3, title: "Learn Apollo" },
  ]);

  const nextId = useRef(4);
  const addToDoHandler = (title) => {
    // console.log(title);
    const toDo = {
      id: nextId.current,
      title: title,
    };

    setToDoList([...toDoList, toDo]);

    nextId.current += 1;
  };

  const deleteHandler = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  function updateTodo(toDo) {
    toDoList.map((item) => {
      if (item.id === toDo.id) {
        item.title = toDo.title;
      }
    });
  }

  return (
    <div>
      <ToDoInput addToDoHandler={addToDoHandler} />
      <ToDoList
        todoList={toDoList}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};
export default ToDoBox;
