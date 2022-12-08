import ChildrenExam from "./compont/propsChildren/ChildrenExam";
import UseStateExam1 from "./compont/useState/UseStateExam1";
import UseStateExam2 from "./compont/useState/UseStateExam2";
import UseStateExam3 from "./compont/useState/UseStateExam3";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const name = "kang";
  console.log("app 실행");
  return (
    <div className="card">
      {/* <h1>hello {name}!!! </h1>
      <Counter />

      <Hello color="blue" name="carami" />
      <Hello></Hello>

      <ChildrenExam /> */}
      <UseStateExam3 />
    </div>
  );
}

export default App;
