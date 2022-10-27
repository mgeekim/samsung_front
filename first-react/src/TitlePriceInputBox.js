import { useState } from "react";

function TitlePriceInputBox() {
  // useState의 기본 값을 객체로 설정한다.
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });
  // inputs의 값을 비구조화 할당한다.
  const { title, price } = inputs;

  function changeHandler(e) {
    // console.log(e);
    const { name, value } = e.target;
    // ...inputs의 내용을 복사한다.
    // name의 값을 key값으로 value를 값으로 오버라이딩한다.
    // 여기서 name은 <input name='title'>의 title을 말한다.
    // value는 <input value={title}>의 {title}값을 말한다.
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetHandler(e) {
    setInputs({
      title: "",
      price: "",
    });
  }

  return (
    <div>
      <label> title : {title}</label>
      <br />
      <label> price : {price}</label>
      <br />
      제목 :{" "}
      <input
        placeholder="제목을 입력하세요."
        type="text"
        name="title"
        value={title}
        onChange={changeHandler}
      />
      <br />
      가격 :{" "}
      <input
        placeholder="가격을 입력하세요."
        type="number"
        name="price"
        value={price}
        onChange={changeHandler}
      />
      <br />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default TitlePriceInputBox;
