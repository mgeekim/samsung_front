// const Counter = ()=>{

import { useState } from "react";
import MyButton from "./MyButton";

// }

function Counter() {
  console.log("Counter 실행!!");
  const [count, setCount] = useState(0);
  //   let count = 5;
  function plusHandler() {
    // count++;
    setCount(count + 1);
    console.log("+ 클릭!!" + count);
  }
  const minusHandler = () => {
    // count--;
    setCount(count - 1);
    console.log("- 클릭" + count);
  };
  return (
    <div>
      <h2>{count}</h2>
      {/* <input type="button" value="+" onClick={plusHandler} />
      <input type="button" value="-" onClick={minusHandler} /> */}
      <MyButton title="+" clickHandler={plusHandler} />
      <MyButton title="-" clickHandler={minusHandler} />
    </div>
  );
}

export default Counter;
