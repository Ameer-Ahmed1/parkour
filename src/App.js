import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Map/Map";
import Modal from "./Components/Modals/Modal";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Navbar />
      </header>
      <Modal />
      <Map />
    </div>
  );
}

export default App;
