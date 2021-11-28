import "./App.css";
import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <SideBar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
