import { useState } from "react";

const UseStateExam2 = () => {
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState(["carami", "kim", "kang"]);

  const uploadHandler = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [inputText, ...prevState];
    });
  };
  const inputChangeHandler = (e) => {
    // console.log("inputChangeHandler");
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={inputChangeHandler} />
      <button onClick={uploadHandler}>입력</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};

export default UseStateExam2;
