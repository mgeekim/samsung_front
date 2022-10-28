import { useEffect, useState } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countUpdate = () => {
    setCount(count + 1);
  };
  console.log("렌더링!!");
  //랜더링 될때마디 실행
  useEffect(() => {
    console.log("useEffect 함수 실행!!");
  });
  //처음 랜더링때만 실행
  useEffect(() => {
    console.log("useEffect 함수 []실행!!");
  }, []);
  //count값이 바뀔때 실행
  useEffect(() => {
    console.log("useEffect 함수 [count]실행!!");

    return () => {
      console.log("여기는~~ 언제 실행될까요???");
    };
  }, [count]);
  //name값이 바뀔때 실행!!
  useEffect(() => {
    console.log("useEffect 함수 [name]실행!!");
  }, [name]);

  return (
    <div>
      <span>count : </span>
      <button onClick={countUpdate}>클릭!!</button>
    </div>
  );
};

export default UseEffectTest;
