import { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  console.log("counter 실행!!");
  //   let count = 5;
  const [count, setCount] = useState(0);
  const plusHandler = () => {
    // count++;
    setCount(count + 1);
    // count++;
    console.log(count);
  };

  function minusHandler() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <h2>{count}</h2>
      <MyButton title="+" clickHandler={plusHandler} />
      {/* <input type="button" value="+" onClick={plusHandler} /> */}
      <MyButton title="-" clickHandler={minusHandler} />
    </div>
  );
};

export default Counter;
