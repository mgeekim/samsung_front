import ChildrenExam from "./compont/propsChildren/ChildrenExam";
import UseStateExam1 from "./compont/useState/UseStateExam1";
import UseStateExam3 from "./compont/useState/UseStateExam3";
import Counter from "./Counter";
import Hello from "./Hello";
import MyInputBox from "./MyInputBox";
import TitlePriceInputBox from "./TitlePriceInputBox";
import Welcome from "./Welcome";

function App() {
  const name = "kang";
  return (
    <>
      <div className="card">hello~~!!{name}</div>
      {/* <Counter /> */}
      {/* <UseStateExam1 />
      <UseStateExam3 /> */}

      {/* <ChildrenExam /> */}
      {/* <Welcome flag={false} />
      <Hello isSpecial={false} name="kang" color="green"></Hello> */}

      {/* <MyInputBox /> */}
      <TitlePriceInputBox />
    </>
  );
}

export default App;
