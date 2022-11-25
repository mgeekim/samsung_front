import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoBox = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    //서버에게 데이터를 요청 받아와서 setTodoList를 이용해서 todoList값을 채워준다.
    async function getTodos() {
      const result = await axios.get(`http://localhost:3030/api/todos`);
      setToDoList(result.data);
    }

    getTodos();
  }, []);

  // console.log(toDoList);
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

  const updateTodo = (toDo) => {
    toDoList.map((item) => {
      if (item.id === toDo.id) {
        item.title = toDo.title;
      }
    });
  };
  return (
    <div>
      <ToDoInput addToDoHandler={addToDoHandler} />
      <ToDoList
        toDoList={toDoList}
        deleteHandler={deleteHandler}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoBox;
