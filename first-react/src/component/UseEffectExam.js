import { useEffect, useState } from "react";

const UseEffectExam = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countUpdat = () => {
    setCount(count + 1);
  };
  //useEffect(콜백함수), useEffect(콜백함수, 디펜전시어레이)
  console.log("랜더링!!");
  useEffect(() => {
    console.log("useEffect [name] 실행!!");
  }, [name]);
  //랜더링 될때마다 매번 실행됨.
  useEffect(() => {
    console.log("useEffect 실행!!");
  });

  //처음 랜더링 될때 한번만 실행됨.
  useEffect(() => {
    console.log("useEffect [] 실행!!");
  }, []);

  useEffect(() => {
    console.log("useEffect [count] 실행!!");
  }, [count]);

  return (
    <div>
      <span>count : {count} </span>
      <button onClick={countUpdat}>클릭!!!</button>
    </div>
  );
};

export default UseEffectExam;
