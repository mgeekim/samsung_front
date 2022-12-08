import ChildrenExam from "./compont/propsChildren/ChildrenExam";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  const name = "kang";
  console.log("app 실행");
  return (
    <div className="card">
      <h1>hello {name}!!! </h1>
      <Counter />

      <Hello color="blue" name="carami" />
      <Hello></Hello>

      <ChildrenExam />
    </div>
  );
}

export default App;
