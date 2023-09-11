import "./App.css";
import Main from "./components/Main/Main";
import SideBarFilter from "./components/SideBarFilter/SideBarFilter";
function App() {
  return (
    <div className="main-wrapper">
      <SideBarFilter />
      <Main />
    </div>
  );
}

export default App;
