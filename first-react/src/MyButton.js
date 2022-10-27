const btnStyle = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  margin: ".5rem",
  border: "1px solid teal",
};

function MyButton(props) {
  return (
    <button style={btnStyle} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
}

MyButton.defaultProps = {
  title: "이름없음",
};

export default MyButton;
