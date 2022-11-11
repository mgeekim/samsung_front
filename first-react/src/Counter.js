import { useState } from "react";
import Hello from "./Hello";
import MyButton from "./MyButton";

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
      <Hello />
      <h2>{count}</h2>
      {/* <input type="button" value="+" onClick={plusHandler} />
      <input type="button" value="-" onClick={minusHandler} /> */}
      <MyButton title="+" clickHandler={plusHandler} />
      <MyButton title="-" clickHandler={minusHandler} />
      <MyButton />
    </div>
  );
};

export default Counter;
