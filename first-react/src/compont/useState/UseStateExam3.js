import { useState } from "react";

const dbWork = () => {
  console.log("자원이나 시간이 많이 드는 작업을 수행해서 초기값을 꺼내올 겨우");
  return ["carami", "kim", "kang"];
};

const UseStateExam3 = () => {
  console.log("useStateExam3");
  const [inputText, setInputText] = useState("");
  const [names, setNames] = useState(() => {
    return dbWork();
  });

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

export default UseStateExam3;
