import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoBox = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    getTodos();
  }, []);

  //   const nextId = useRef(4);
  const addToDoHandler = (toDo) => {
    console.log("todobox ::" + toDo);
    const newTodo = {
      title: toDo,
    };

    async function addToDo(newTodo) {
      await axios
        .post(`http://localhost:3030/api/todos`, newTodo)
        .then(function (response) {});

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    addToDo(newTodo);
  };
  const deleteHandler = (id) => {
    // setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    async function deleteTodo(id) {
      await axios.delete(`http://localhost:3030/api/todos/${id}`);

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    deleteTodo(id);
  };

  const updateToDo = (toDo) => {
    // setToDoList(
    //   toDoList.map((item) => {
    //     if (item.id === toDo.id) {
    //       item.title = toDo.title;
    //     }
    //   })
    // );
    async function updateToDo(todo) {
      await axios.patch(`http://localhost:3030/api/todos`, todo);

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }
    updateToDo(toDo);
  };
  return (
    <div>
      <ToDoInput addToDoHandler={addToDoHandler} />
      <ToDoList
        toDoList={toDoList}
        deleteHandler={deleteHandler}
        updateToDo={updateToDo}
      />
    </div>
  );
};

export default ToDoBox;
