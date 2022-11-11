import { useState, useRef } from "react";
const ToDoInput = ({ addToDoHandler }) => {
  //   const [toDo, setToDo] = useState("");
  const inputRef = useRef();

  //   const onChangeHandler = (e) => {
  //     // console.log(e.target.value);
  //     // console.log(inputRef.current.value);

  //     setToDo(inputRef.current.value);
  //   };
  const keypressHandler = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      if (inputRef.current.value === "") return;
      //todList에 저장하도록!!
      addToDoHandler(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      onKeyPress={keypressHandler}
      placeholder="할일을 입력하세요."
    />
  );
};

export default ToDoInput;
