import { useRef, useState } from "react";

const UseRefExam2 = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);
  let countlet = 0;
  const increState = () => {
    setCount(count + 1);
    console.log("count :::" + count);
  };
  console.log("렌더링~~!!");
  const increRef = () => {
    countRef.current = countRef.current + 1;
    countlet++;
    console.log("countRef:::" + countRef.current);
    console.log("countlet:::" + countlet);
  };
  return (
    <div>
      <p>state ::: {count}</p>
      <p>ref ::: {countRef.current}</p>
      <p>let ::: {countlet}</p>

      <button onClick={increState}>state update</button>
      <button onClick={increRef}>ref update</button>
    </div>
  );
};

export default UseRefExam2;
