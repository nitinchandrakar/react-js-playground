import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case "Increment":
      return state + 1;
    default:
      return state;
  }
}

export default function InfaniteCounter() {
  const [state, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    setInterval(() => {
      dispatch({type: "Increment"});
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>The current count is:</h1>
      <h2>{state}</h2>
    </div>
  );
}