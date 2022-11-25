import { useState } from "react";

const TitlePriceInputBox = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });

  const { title, price } = inputs;
  const ChangeHandler = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
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
      <label> title : {title}</label>
      <br />
      <label> price : {price} </label>
      <br />
      제목 :{" "}
      <input
        placeholder="제목을 입력하세요."
        type="text"
        value={title}
        onChange={ChangeHandler}
        name="title"
      />
      <br />
      가격 :{" "}
      <input
        placeholder="가격을 입력하세요."
        type="number"
        value={price}
        onChange={ChangeHandler}
        name="price"
      />{" "}
      <br />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default TitlePriceInputBox;
