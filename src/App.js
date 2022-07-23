import './App.css';
import ChangeColor from './Component/ChangeColor';
import InfaniteCounter from './Component/InfaniteCounter';
import Login from './Component/Login';
import Profile from './Component/Profile';
function App() {
  return (
    <div className="App">
      <h1>Hellow World</h1>
      <Profile></Profile>
      <Login></Login>
      <ChangeColor></ChangeColor>
      <InfaniteCounter></InfaniteCounter>
    </div>
  );
}

export default App;
