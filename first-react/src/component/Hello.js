const Hello = (props) => {
  return (
    <div style={{ color: props.color }}>
      {props.isSpecial && <b>*</b>}
      안녕하세요. {props.name}
    </div>
  );
};

Hello.defaultProps = {
  name: "none",
};
export default Hello;
