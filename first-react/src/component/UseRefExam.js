import { useEffect, useRef, useState } from "react";
const UseRefExam = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const testRef = useRef();
  console.log("랜더링");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const caramiHandler = () => {
    console.log(inputRef);
    alert(`hello~~~ ${inputRef.current.value}`);
    // setText("");

    inputRef.current.focus();
    inputRef.current.value = "";
    console.log("test");
  };
  //   const inputChangeHandler = () => {
  //     console.log("inputChange!!");
  //     setText(inputRef.current.value);
  //   };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        // value={text}
        // onChange={inputChangeHandler}
        placeholder="이름을 입력하세요."
      />
      <button onClick={caramiHandler}>carami btn</button>
      <br></br>
      <span>name :::: {testRef.current}</span>
    </div>
  );
};

export default UseRefExam;
