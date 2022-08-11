import { useEffect, useState } from "react";

export function Timer() {
  let [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
        setTime(()=>new Date())
    },1000);

    return function clear(){
        clearInterval(intervalId)
    }
  },[])
  return (
    <>
      <div>
        <span>
          {time.getHours()}
          Hr
        </span>
        <span>
          {time.getMinutes()}
          minuts
        </span>
        <span>
          {time.getSeconds()}
          seconds
        </span>
      </div>
    </>
  );
}
