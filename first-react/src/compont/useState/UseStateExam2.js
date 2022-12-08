import { useState } from "react";

const UseStateExam2 = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState(["carami", "kang", "kyungmi"]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const uploadHandler = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...names];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={inputChangeHandler} />
      <button onClick={uploadHandler}>입력</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};

export default UseStateExam2;
