import { useState } from "react";
import Hello from "./Hello";
import MyButton from "./MyButton";

function Counter() {
  console.log("Counter 렌더링!! 👍");
  let count22 = 5;
  //   function setCount(value) {
  //     count = value;
  //   }
  const [count, setCount] = useState(5);
  const plusHandler = () => {
    setCount(count + 1);
    console.log(count);
    console.log("count22:::::" + count22++);
  };

  function minusHandler() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div>
      <Hello color="red" name="carami" isSpecial={true} />
      <Hello color="blue" />
      <h2>{count}</h2>
      <MyButton title="+" clickHandler={plusHandler} />
      <MyButton title="-" clickHandler={minusHandler} />
      <MyButton clickHandler={plusHandler} />
    </div>
  );
}

export default Counter;
