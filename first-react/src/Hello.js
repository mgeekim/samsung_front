function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요{name}</div>;
}

Hello.defaultProps = {
  color: "pink",
  name: "no name",
};
export default Hello;
