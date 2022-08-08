import { useNavigate } from "react-router-dom"

export function NavigationButton(){

    const navigate = useNavigate()
   return(
    <>
        <button onClick={()=>navigate('/',{replace:true})}>Navigate</button>
    </>
   ) 
}