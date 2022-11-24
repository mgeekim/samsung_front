import { useState } from "react";

//use state의 초기값을 넣어줄 때 뭔가 복잡한 작업들을 진행해서 값을 얻어야 한다면??
const caramiWork = () => {
  console.log("복잡하고 힘든 작업!!");
  return ["kang", "kim", "hong"];
};

const UseStateExam3 = () => {
  const [input, setInput] = useState("");
  const [names, setNames] = useState(caramiWork);
  //   const [names, setNames] = useState(() => {
  //     return caramiWork();
  //   });

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

export default UseStateExam3;
