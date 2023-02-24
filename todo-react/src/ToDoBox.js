import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import axios from "axios";

import { useState, useRef, useEffect } from "react";

const ToDoBox = () => {
  console.log("todoBox ✌✌");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const result = await axios.get("http://localhost:3333/api/todos");
      setToDoList(result.data);
    }

    getTodos();
  }, []);

  //   const nextId = useRef(4);
  const addToDoHandler = (title) => {
    // console.log(title);
    const toDo = {
      //   id: nextId.current,
      title: title,
    };

    async function addTodo(toDo) {
      await axios
        .post("http://localhost:3333/api/todos", toDo)
        .then(function (response) {});

      const result = await axios.get("http://localhost:3333/api/todos");
      setToDoList(result.data);
    }

    // setToDoList([...toDoList, toDo]);
    // nextId.current += 1;
    addTodo(toDo);
  };

  const deleteHandler = (id) => {
    // setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    async function deleteTodo(id) {
      await axios.delete(`http://localhost:3333/api/todos/${id}`);

      const result = await axios.get("http://localhost:3333/api/todos");
      setToDoList(result.data);
    }

    deleteTodo(id);
  };

  function updateTodo(toDo) {
    async function updateTodo(todo) {
      await axios.patch("http://localhost:3333/api/todos", todo);

      const result = await axios.get("http://localhost:3333/api/todos");
      setToDoList(result.data);
    }

    updateTodo(toDo);

    //     toDoList.map((item) => {
    //       if (item.id === toDo.id) {
    //         item.title = toDo.title;
    //       }
    //     });
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
