import { useState } from "react";

const work = () => {
  console.log("많은 일을 수행해서 초기값 배열을 얻어옴!!");
  return ["carami", "kang", "kyungmi"];
};

const UseStateExam3 = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState(() => {
    console.log("names useState");
    return work();
  });

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

export default UseStateExam3;
