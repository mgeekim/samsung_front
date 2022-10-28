import { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import axios from "axios";
function ToDoBox() {
  useEffect(() => {
    console.log("useEffect!");
    async function getTodos() {
      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }
    getTodos();
  }, []);
  const [toDoList, setToDoList] = useState([]);

  //   const nextId = useRef(4);
  function addToDoHandler(toDo) {
    const newToDo = {
      //   id: nextId.current,
      title: toDo,
    };
    // setToDoList(toDoList.concat(newToDo));
    //setToDoList([...toDoList, newToDo]);
    async function addTodo(todo) {
      await axios
        .post(`http://localhost:3030/api/todos`, todo)
        .then(function (response) {});

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    addTodo(newToDo);
  }

  // nextId.current += 1;

  function deleteHandler(id) {
    async function deleteTodo(id) {
      await axios.delete(`http://localhost:3030/api/todos/${id}`);

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }
    deleteTodo(id);
  }
  function updateToDo(toDo) {
    async function updateTodo(todo) {
      await axios.patch(`http://localhost:3030/api/todos`, todo);

      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    updateTodo(toDo);
  }

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
}

export default ToDoBox;
