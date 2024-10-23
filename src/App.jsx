import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import IphoneFolder from "./components/iphoneFolder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<IphoneFolder />} />
    </Routes>
  );
}

export default App;
