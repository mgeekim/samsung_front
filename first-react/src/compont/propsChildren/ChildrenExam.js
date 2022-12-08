import Counter from "../../Counter";
import First from "./First";
import Parent from "./Parent";
import Second from "./Second";

const ChildrenExam = () => {
  return (
    <Parent>
      {/* <Counter /> */}
      <First />
      <Second name="kang" />
      <Second name="carami" />
    </Parent>
  );
};

export default ChildrenExam;
