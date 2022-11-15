import MyTabComponent from "./MyTabComponent/MyTabComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MyTabComponent>
        <div title={"Section title 1"}> Content of section 1 </div>
        <div title={"Section title 2"}> Content of section 2 </div>
      </MyTabComponent>
    </div>
  );
}
