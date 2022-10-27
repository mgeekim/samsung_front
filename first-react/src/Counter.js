import { useState } from "react";
import MyButton from "./MyButton.js";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  function plusHandler() {
    // count++;
    setCount(count + 1);
    console.log(count);
  }

  function minusHandler() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <MyButton title="+" clickHandler={plusHandler} />
      <MyButton title="-" clickHandler={minusHandler} />
      <MyButton clickHandler={minusHandler} />
    </div>
  );
}

export default Counter;
