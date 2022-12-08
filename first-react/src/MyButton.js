const MyButton = (props) => {
  const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    margin: ".5rem",
    border: "1px solid teal",
  };

  return (
    <button style={btnStyle} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
};

export default MyButton;
