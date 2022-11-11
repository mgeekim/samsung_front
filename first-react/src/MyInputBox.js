import { useState } from "react";

function MyInputBox() {
  const [text, setText] = useState("초기값");

  const resetHandler = () => {
    setText("");
  };

  const clickHandler = () => {
    setText("");
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <label>{text}</label>
      <input
        type="text"
        value={text}
        onChange={changeHandler}
        onClick={clickHandler}
      />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default MyInputBox;
