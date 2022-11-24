import First from "./First";
import Parent from "./Parent";
import Second from "./Second";

const ChildrenExam = () => {
  return (
    <Parent>
      <First name="carami" />
      <Second />
      <Second />
    </Parent>
  );
};

export default ChildrenExam;
