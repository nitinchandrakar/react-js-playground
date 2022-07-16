import { useState } from "react"

export default function Input({placeholder, onChange, initialValue}){
    const [value, setValue] = useState(initialValue);

    const onChangeHanlder = (event)=>{
        setValue(event.target.value)
        onChange.call(this, event);
    }

    return(<>
        <input value={value} placeholder={placeholder} onChange={onChangeHanlder}></input>
    </>)
}