import { useEffect, useState } from "react";

const UseEffectExam = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countUpdate = () => {
    setCount(count + 1);
  };

  const nameUpdate = (e) => {
    setName(e.target.value);
  };
  console.log("UseEffectExam 컴포넌트 랜더링👍!!!");
  //랜더링 될때마다 실행됨!!!
  useEffect(() => {
    console.log("useEffect 실행!!!");
  });
  //디펜전시 배열이 바뀌었을 때만 실행!!
  useEffect(() => {
    console.log("useEffect  count update!!");
  }, [count]);
  useEffect(() => {
    console.log("useEffect  name update!!");
  }, [name]);

  //처음 한 번만 실행하고 싶을때~~~!!!
  useEffect(() => {
    console.log("useEffect  [] 실행!!");
  }, []);
  return (
    <div>
      <span>count : {count}</span>
      <button onClick={countUpdate}>클릭!!!</button> <br />
      <span>name : {name}</span>
      <br />
      <input type="text" value={name} onChange={nameUpdate} />
    </div>
  );
};

export default UseEffectExam;
