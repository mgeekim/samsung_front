import { useState, useRef } from "react";

function UseRefExam1() {
  console.log("랜더링✌🤞");
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const increaseState = () => {
    setCount(count + 1);
    console.log("useSteate::::" + count);
  };
  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("countRef:::" + countRef.current);
  };

  const increaseLet = () => {
    countLet++;
    console.log("countLet:::" + countLet);
  };

  return (
    <div>
      <p>uesState : {count}</p>
      <p>useRef: {countRef.current}</p>
      <p>Let: {countLet}</p>
      <button onClick={increaseState}>state update</button>
      <button onClick={increaseRef}>ref update</button>
      <button onClick={increaseLet}>let update</button>
    </div>
  );
}

export default UseRefExam1;
