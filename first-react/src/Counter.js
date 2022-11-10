import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let count222 = 0;
  //   let count = 10;

  console.log("Count 컴포넌트 랜더링!! 🤞");

  const plusHandler = () => {
    count222++;
    setCount(count + 1);
    console.log("+count" + count);
    console.log("+count222:::" + count222);
  };
  const minusHandler = () => {
    count222--;
    setCount(count - 1);
    console.log("-count" + count);
    console.log("-count222:::" + count222);
  };
  return (
    <div>
      <h2>{count222}</h2>
      <h2>{count}</h2>
      <input type="button" value="+" onClick={plusHandler} />
      <input type="button" value="-" onClick={minusHandler} />
    </div>
  );
};

export default Counter;
