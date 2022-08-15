import { forwardRef } from "react";

function Input(props, ref){
    return (
      <>
        <input type="text" onChange={props.changeHandler} ref={ref
        }></input>
      </>
    );
  }

  export default forwardRef(Input);


  