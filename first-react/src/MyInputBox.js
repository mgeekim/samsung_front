import { useRef, useState } from "react";

function MyInputBox() {
  const [text, setText] = useState("기본값");
  const textInput = useRef();
  function resetHandler(e) {
    setText("");
    textInput.current.focus();
  }

  function chageHandler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <label>{text}</label>
      <br />
      <input type="text" value={text} onChange={chageHandler} ref={textInput} />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default MyInputBox;
