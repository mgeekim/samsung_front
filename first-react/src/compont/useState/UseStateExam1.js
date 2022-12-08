import { useState } from "react";

const UseStateExam1 = () => {
  console.log("👍");
  const [time, setTime] = useState(1);

  const updateTime = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  return (
    <div>
      <span>시간 : {time} 시</span>
      <button onClick={updateTime}>update</button>
    </div>
  );
};

export default UseStateExam1;
