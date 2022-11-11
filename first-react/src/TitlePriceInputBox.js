import { useState } from "react";

const TitlePriceInputBox = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });

  const { title, price } = inputs;

  const changeHandler = (e) => {
    const { name, value } = e.target;

    console.log("name :::" + name);
    console.log("value :::" + value);
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
      <label>title : {title}</label> <br></br>
      <label>price : {price} </label> <br></br>
      <input
        placeholder="제목을 입력하세요."
        type="text"
        name="title"
        value={title}
        onChange={changeHandler}
      ></input>
      <input
        placeholder="가격을 입력하세요."
        type="number"
        name="price"
        value={price}
        onChange={changeHandler}
      />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default TitlePriceInputBox;
