import { useState } from "react";

function ToDoInput({ addToDoHandler }) {
  const [title, setTitle] = useState("");

  //입력값이 바뀌었을때 title 변경하기위한 함수
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  //Enter 키가 눌렸을때 리스트에 저장하기 위한 함수
  const keyPressHandler = (e) => {
    // console.log(e.key);

    if (e.key === "Enter") {
      if (title === "") return; //입력값이 없이 엔터키 눌렸을때..
      //리스트에 저장!!
      addToDoHandler(title);
      setTitle("");
    }
  };
  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      value={title}
      onChange={onChangeHandler}
      onKeyPress={keyPressHandler}
    />
  );
}

export default ToDoInput;
