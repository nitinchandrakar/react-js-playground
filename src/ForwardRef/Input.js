import { forwardRef } from "react";

function Input(props, ref){
    return (
      <>
        <input type="text" ref={ref
        }></input>
      </>
    );
  }

  export default forwardRef(Input);


  