import { useState } from "react";

const UseStateExam2 = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState(["kang", "kim", "hong"]);

  const inputChangeHandle = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const uploadHandle = () => {
    setNames((prevState) => {
      console.log("prevState::: " + prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={inputChangeHandle} />
      <button onClick={uploadHandle}>upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};
export default UseStateExam2;
