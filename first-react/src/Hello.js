// const Hello = (props) => {
//   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
// };

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
};

Hello.defaultProps = {
  color: "blue",
  name: "carami",
};

export default Hello;
