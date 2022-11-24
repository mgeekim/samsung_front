import { useState } from "react";

const UseStateExam = () => {
  const [time, setTime] = useState(1);

  const updateTimeHandle = () => {
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
      <span>현재시간 : {time} 시</span>
      <button onClick={updateTimeHandle}>update</button>
    </div>
  );
};

export default UseStateExam;
