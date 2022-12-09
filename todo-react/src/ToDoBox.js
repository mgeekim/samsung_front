import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ToDoBox = () => {
  console.log("todobox");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const result = await axios.get("http://localhost:3030/api/todos");
      setTodoList(result.data);
    }

    getTodos();
  }, []);

  // const nextId = useRef(4);

  const addTodo = (title) => {
    // //리스트에 저장하는 함수.
    // console.log("todobox의 addTodo 함수 호출!!");
    const todo = {
      // id: nextId.current,
      title: title,
    };
    // setTodoList([...todoList,todo]);
    // setTodoList(todoList.concat(todo));
    // nextId.current++;
    async function addTodo(todo) {
      await axios
        .post("http://localhost:3030/api/todos", todo)
        .then(function (response) {});

      const result = await axios.get("http://localhost:3030/api/todos");
      setTodoList(result.data);
    }

    addTodo(todo);
  };
  const updateTodo = (todo) => {
    // todoList.map((item) => {
    //   if (item.id === todo.id) {
    //     item.title = todo.title;
    //   }
    // });
    async function updateTodo(todo) {
      await axios.patch("http://localhost:3030/api/todos", todo);

      const result = await axios.get("http://localhost:3030/api/todos");
      setTodoList(result.data);
    }
    updateTodo(todo);
  };
  const deleteHandler = (id) => {
    // setTodoList(todoList.filter((todo) => todo.id !== id));
    async function deleteTodo(id) {
      await axios.delete(`http://localhost:3030/api/todos/${id}`);

      const result = await axios.get("http://localhost:3030/api/todos");
      setTodoList(result.data);
    }

    deleteTodo(id);
  };
  return (
    <div>
      <ToDoInput addTodoHandler={addTodo} />
      <ToDoList
        todoList={todoList}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoBox;
