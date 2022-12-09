import { useState } from "react";
const ToDoInput = ({ addTodoHandler }) => {
  console.log("todoinput");
  const [todo, setTodo] = useState("");

  const keyPressHandler = (e) => {
    // console.log("key:::" + e.key);
    // console.log("value::" + e.target.value);
    if (e.key === "Enter") {
      //리스트에 저장!!
      if (todo === "") return;
      addTodoHandler(todo);
      setTodo("");
    }
  };
  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="할일을 입력하세요."
      value={todo}
      onChange={onChangeHandler}
      onKeyPress={keyPressHandler}
    />
  );
};

export default ToDoInput;
