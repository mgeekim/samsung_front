import { useState } from "react";
const UseStateExam1 = () => {
  const [time, setTime] = useState(1);

  const clickHandle = () => {
    let currTime;
    if (time >= 12) {
      currTime = 1;
    } else {
      currTime = time + 1;
    }
    setTime(currTime);
  };
  return (
    <div>
      <span>현재시간 :: {time} 시 </span>
      <button onClick={clickHandle}>update</button>
    </div>
  );
};
// function UseStateExam1(){

// }

export default UseStateExam1;
