import { useReducer } from "react";

export default function ReduceDemo() {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action) {
      case "INC":
        return { ...state, count: state.count + 1 };
      case "DEC":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch("INC")}>Increment</button>
      <button onClick={() => dispatch("DEC")}>Decrement</button>
    </>
  );
}
