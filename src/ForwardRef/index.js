import { useRef } from "react";
import Input from "./Input";

export default function ForwardRefDemo() {
  const inputRef = useRef(null);
  
  function updateInput(){
    inputRef.current.value = ''
  }

  function onInputChange(e){
      console.log(e.target.value);
  }
  return (
    <>
      <Input ref={inputRef} changeHandler={onInputChange}></Input>
      <button onClick={updateInput}>Update Input</button>
    </>
  );
}
