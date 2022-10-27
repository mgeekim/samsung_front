// import Counter from "./Counter";
import TitlePriceInputBox from "./TitlePriceInputBox";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="card">
      {/* Hello react!!! */}
      <Welcome flag={true} />

      {/* <Counter /> */}

      <TitlePriceInputBox />
    </div>
  );
}

export default App;
