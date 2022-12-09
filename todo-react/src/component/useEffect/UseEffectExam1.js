import { useEffect, useState } from "react";

const UseEffectExam1 = () => {
  console.log("UseEffectExam1 component 실행!!");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect 실행!! 디펀전시배열이 없는 상태!! (매번 실행)");
  });

  useEffect(() => {
    console.log("useEffect [count] 디펜전시 배열 (디펜전시배열이 바뀔때 실행)");
  }, [count]);
  useEffect(() => {
    console.log("useEffect [name] 디펜전시 배열 (디펜전시배열이 바뀔때 실행)");
  }, [name]);
  useEffect(() => {
    console.log("useEffect [] 디펜전시 배열 (처음 마운팅될때 한번 실행!!)");
  }, []);
  const updateCount = () => {
    setCount(count + 1);
  };

  const inputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <span>count : {count}</span>
      <button onClick={updateCount}>update</button> <br></br>
      <input type="text" value={name} onChange={inputChange} />
      <span>{name}</span>
    </div>
  );
};

export default UseEffectExam1;
