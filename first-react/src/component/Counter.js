import { useState } from "react";

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
      <h2>{count}</h2>
      <input type="button" value="+" onClick={plusHandler} />
      <input type="button" value="-" onClick={minusHandler} />
    </div>
  );
}

export default Counter;
