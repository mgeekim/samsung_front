import { useEffect, useState } from "react";

const UseEffectExam = () => {
  console.log("UseEffectExam 컴포넌트 실행!!");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useEffect 실행!! 디펜전시배열이 없는 상태!! (매번 호출)");
  });

  useEffect(() => {
    console.log(
      "useEffect 실행!! 디펜전시배열[count](count값이 변경될때마다 호출)"
    );
  }, [count]);

  useEffect(() => {
    console.log(
      "useEffect 실행!! 디펜전시배열[count2](count2값이 변경될때마다 호출)"
    );
  }, [count2]);
  useEffect(() => {
    console.log("useEffect 실행!! 디펜전시배열[](처음 한 번 만 실행됨!!)");
  }, []);

  const updateCount = () => {
    setCount(count + 1);
  };
  const updateCount2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div>
      <div>hi!@@</div>
      <span>count : {count} </span>
      <button onClick={updateCount}>count update</button>
      <br></br>
      <span>count2 : {count2} </span>
      <button onClick={updateCount2}>count update2</button>
    </div>
  );
};

export default UseEffectExam;
