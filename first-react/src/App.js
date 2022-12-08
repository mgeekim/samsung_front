import Counter from "./Counter";

function App() {
  const name = "kang";
  console.log("app 실행");
  return (
    <div className="card">
      <h1>hello {name}!!! </h1>
      <Counter />
    </div>
  );
}

export default App;
