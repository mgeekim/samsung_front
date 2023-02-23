import { useState } from "react";

const TitlePriceInputBox = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });

  const { title, price } = inputs;

  const changeHandler = (event) => {
    // console.log(event.target);
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
      <label> title : {title}</label>
      <br />
      <label>price:{price}</label>
      <br />
      제목 :{" "}
      <input
        placeholder="제목"
        type="text"
        name="title"
        value={title}
        onChange={changeHandler}
      />
      <br />
      가격 :{" "}
      <input
        placeholder="가격"
        type="text"
        name="price"
        value={price}
        onChange={changeHandler}
      />
      <br></br>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default TitlePriceInputBox;
