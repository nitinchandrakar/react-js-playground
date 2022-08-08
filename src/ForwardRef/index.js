import { useRef } from "react";
import Input from "./Input";

export default function ForwardRefDemo() {
  const inputRef = useRef(null);
  
  function updateInput(){
    inputRef.current.value = 'Nitin'
  }
  return (
    <>
      <Input ref={inputRef}></Input>
      <button onClick={updateInput}>Update Input</button>
    </>
  );
}
