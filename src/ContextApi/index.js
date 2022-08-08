import { createContext, useState } from "react";
import Parent from "./Component/Parent";

export const AppContext = createContext(null);

export function ContextApi() {
  
 const [userName, setUserName] = useState('Nitin');

  return (
   <AppContext.Provider value={{userName, setUserName}}>
        <Parent></Parent>

        <h2>Drawbck of ContextApi</h2>
        <p>
            If any context change all components related to those context will be rerender
        </p>
   </AppContext.Provider>
  );
}
