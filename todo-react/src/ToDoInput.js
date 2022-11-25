import { useState } from "react";

function ToDoInput({ addToDoHandler }) {
  const [toDo, setToDo] = useState("");

  const onChangeHandler = (e) => {
    setToDo(e.target.value);
  };
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      if (toDo === "") return;
      addToDoHandler(toDo);
      setToDo("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      onKeyPress={keyPressHandler}
      value={toDo}
      onChange={onChangeHandler}
    />
  );
}

export default ToDoInput;
