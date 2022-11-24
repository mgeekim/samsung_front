const btnStyle = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  margin: ".5rem",
  border: "1px solid teal",
};

function MyButton({ title, clickHandler }) {
  return (
    <button style={btnStyle} onClick={clickHandler}>
      {title}
    </button>
  );
}

MyButton.defaultProps = {
  title: "버튼",
};
export default MyButton;
