import { Routes, Route } from "react-router-dom";
import About from "./About";
import Navbar from "./Components/Navbar";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
