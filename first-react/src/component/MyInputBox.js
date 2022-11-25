import { useState } from "react";

function MyInputBox() {
  const [text, setText] = useState("기본값");

  function resetHandler(e) {
    setText("");
  }

  function chageHandler(e) {
    setText(e.target.value);
  }
  const clickHandler = () => {
    setText("");
  };
  return (
    <div>
      <label>{text}</label>
      <br />
      <input
        type="text"
        value={text}
        onChange={chageHandler}
        onClick={clickHandler}
      />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default MyInputBox;
