import { useState } from "react";

function TitlePriceInputBox() {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });
  const { title, price } = inputs;
  const changeHandler = (event) => {
    // console.log(e.target);
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetHandler = () => {
    setInputs({
      title: "",
      price: "",
    });
  };
  return (
    <div>
      <label> title :{title} </label>
      <br />
      <label> price : {price}</label>
      <br />
      제목 :{" "}
      <input
        placeholder="제목을 입력하세요."
        type="text"
        value={title}
        name="title"
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
