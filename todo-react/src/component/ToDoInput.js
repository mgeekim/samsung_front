import { useState } from "react";

function ToDoInput({ addToDoHandler }) {
  const [toDo, setToDo] = useState("");

  function keyPressHandler(e) {
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      addToDoHandler(e.target.value);
      setToDo("");
    }
  }

  function onChangeHandler(e) {
    setToDo(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={toDo}
      onChange={onChangeHandler}
      onKeyPress={keyPressHandler}
    />
  );
}

export default ToDoInput;
