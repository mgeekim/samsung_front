import { useEffect, useRef } from "react";

const UseRefExam2 = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const caramiFunc = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    alert(`hello~~ ${inputRef.current.value}`);
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="이름을 입력하세요^^" />
      <button onClick={caramiFunc}>클릭!!</button>
    </div>
  );
};

export default UseRefExam2;
