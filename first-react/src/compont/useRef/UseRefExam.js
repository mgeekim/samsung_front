import { useRef, useState } from "react";

const UseRefExam = () => {
  console.log("랜더링✌");
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const increaseState = () => {
    setCount(count + 1);
    console.log("useState ::::: " + count);
  };
  const increaseRef = () => {
    console.log("countRef:::::" + countRef.current);
    // console.log(countRef);
    countRef.current = countRef.current + 1;
  };
  const increaseLet = () => {
    countLet++;
    console.log("countLet :::::::" + countLet);
  };
  return (
    <div>
      <p>useState : {count}</p>
      <p>useRef : {countRef.current}</p>
      <p>let:{countLet}</p>

      <button onClick={increaseState}>state update</button>
      <button onClick={increaseRef}>ref update</button>
      <button onClick={increaseLet}>let update</button>
    </div>
  );
};

export default UseRefExam;
