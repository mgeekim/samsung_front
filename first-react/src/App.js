import BoardList from "./BoardList";
import UseRefExam1 from "./compont/useRef/UseRefExam1";
import MyInputBox from "./MyInputBox";
// import ChildrenExam from "./compont/propsChildren/ChildrenExam";
// import TitlePriceInputBox from "./TitlePriceInputBox";
// import UseStateExam1 from "./compont/useState/UseStateExam1";
// import UseStateExam2 from "./compont/useState/UseStateExam2";
// import UseStateExam3 from "./compont/useState/UseStateExam3";
// import Welcome from "./compont/Welcome";
// import Counter from "./Counter";
// import Hello from "./Hello";

function App() {
  // const name = "kang";
  console.log("app 실행");
  return (
    <div className="card">
      {/* <h1>hello {name}!!! </h1>
      <Counter />

      <Hello></Hello>

      <ChildrenExam /> */}
      {/* <UseStateExam3 /> 
      <Welcome flag={false} />

      <Hello color="blue" name="carami" isSpecial={true} />
      */}
      {/* <MyInputBox /> */}
      {/* <TitlePriceInputBox /> */}
      {/* <UseRefExam1 /> */}
      <BoardList />
    </div>
  );
}

export default App;
