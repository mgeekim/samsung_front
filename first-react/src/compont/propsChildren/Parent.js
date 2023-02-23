const Parent = (props) => {
  const style = {
    border: "4px solid green",
    padding: "15px",
  };
  return <div style={style}>{props.children}</div>;
};

export default Parent;
