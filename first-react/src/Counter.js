import { useRef, useState } from "react";
import MyButton from "./MyButton.js";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log(countRef.current);
  let number = 1;
  function plusHandler() {
    // count++;
    // setCount(count + 1);
    number = number + 1;
    countRef.current = countRef.current + 1;
    console.log("let number :: " + number);
    console.log("useState count ::", count);
    console.log("countRef :: " + countRef.current);
  }

  function minusHandler() {
    // count--;
    setCount(count - 1);
    console.log("useState count ::", count);
  }

  console.log("랜더링되요!! " + ++number);

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
