import { useRef, useState } from "react";

const UseRefExam = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  let letCount = 0;
  //   console.log(countRef);
  const updateState = () => {
    setCount(count + 1);
  };
  const updateLet = () => {
    console.log("let ::: " + letCount);
    letCount++;
  };
  const updateRef = () => {
    countRef.current = countRef.current + 1;
    console.log("useRef::::" + countRef.current);
  };
  return (
    <div>
      <p>let :: {letCount}</p>
      <p>State :: {count}</p>
      <p>useRef :: {countRef.current}</p>
      <button onClick={updateState}>useState update!!</button>
      <button onClick={updateRef}>useRef update!!</button>
      <button onClick={updateLet}>let update!!</button>
    </div>
  );
};

export default UseRefExam;
