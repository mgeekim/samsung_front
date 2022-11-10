import { useState } from "react";

const UseStateExam2 = () => {
  const [products, setProducts] = useState(["사과", "펜", "마우스"]);
  const [input, setInput] = useState("");

  const inputChangHandle = (e) => {
    setInput(e.target.value);
  };
  const saveHandle = () => {
    console.log(input);

    setProducts((prevState) => {
      console.log(...prevState);
      return [input, ...prevState];
    });
  };
  return (
    <div>
      <input type="text" value={input} onChange={inputChangHandle}></input>
      <button onClick={saveHandle}>저장!!</button>

      {products.map((product, index) => {
        return <p key={index}>{product}</p>;
      })}
    </div>
  );
};

export default UseStateExam2;
