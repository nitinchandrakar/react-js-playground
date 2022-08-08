import { Routes, Route } from "react-router-dom";
import About from "./About";
import Navbar from "./Components/Navbar";
import { ContextApi } from "./ContextApi";
import Home from "./Home";
import NoMatch from "./Nomatch";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contextapi" element={<ContextApi></ContextApi>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
