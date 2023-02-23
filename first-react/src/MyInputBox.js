import { useRef, useState } from "react";

function MyInputBox() {
  const [text, setText] = useState("기본값");

  const textinput = useRef();

  function resetHandler(e) {
    setText("");
    textinput.current.focus();
  }

  function chageHandler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <label>{text}</label>
      <br />
      <input type="text" value={text} onChange={chageHandler} ref={textinput} />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default MyInputBox;
