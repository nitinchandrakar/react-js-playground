import { Routes, Route } from "react-router-dom";
import About from "./About";
import ClassComponent from "./ClassComponent";
import ErrorBoundary from "./Components/ErrorBoundary";
import Navbar from "./Components/Navbar";
import { ContextApi } from "./ContextApi";
import ForwardRefDemo from "./ForwardRef";
import Home from "./Home";
import NoMatch from "./Nomatch";
import ReduceDemo from "./ReduceDemo";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contextapi" element={<ContextApi></ContextApi>}></Route>
          <Route
            path="/forwardref"
            element={<ForwardRefDemo></ForwardRefDemo>}
          ></Route>
          <Route path="/reducer" element={<ReduceDemo></ReduceDemo>}></Route>
          <Route
            path="/lifecycle"
            element={<ClassComponent favcol="blue"></ClassComponent>}
          ></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
