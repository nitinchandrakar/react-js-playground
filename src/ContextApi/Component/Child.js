import { useContext } from "react";
import { AppContext } from "..";

export default function Child() {
    const {setUserName} = useContext(AppContext);
    return <>
        <button onClick={()=>setUserName('Nitin Chandrakar')}>Update UserName</button>
    </>;
  }
  