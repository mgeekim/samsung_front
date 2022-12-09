import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useState, useRef } from "react";

const ToDoBox = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn GraphQL" },
    { id: 3, title: "Learn Apollo" },
  ]);
  const nextId = useRef(4);

  const addTodo = (title) => {
    // //리스트에 저장하는 함수.
    // console.log("todobox의 addTodo 함수 호출!!");
    const todo = {
      id: nextId.current,
      title: title,
    };
    // setTodoList([...todoList,todo]);
    setTodoList(todoList.concat(todo));
    nextId.current++;
  };
  const deleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <ToDoInput addTodoHandler={addTodo} />
      <ToDoList todoList={todoList} deleteHandler={deleteHandler} />
    </div>
  );
};

export default ToDoBox;
