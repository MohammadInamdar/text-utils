import "./App.css";
import NavBar from "./Component/NavBar";
import TextForm from "./Component/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />

      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" />
      </div>
    </>
  );
}

export default App;
