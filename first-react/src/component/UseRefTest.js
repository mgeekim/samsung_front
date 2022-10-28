import { useEffect, useRef } from "react";

const UseRefTest = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const caramiHandle = () => {
    alert(`hello~~~ ${inputRef.current.value}`);
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="이름입력^^" />
      <button onClick={caramiHandle}>carami btn</button>
    </div>
  );
};

export default UseRefTest;
