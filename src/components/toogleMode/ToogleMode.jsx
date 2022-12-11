
import { useState } from "react"
import "./ToogleMode.css";
import { RiMoonClearFill } from 'react-icons/ri';
import { BsSun } from 'react-icons/bs'

export const ToogleMode = () => {
 
  const [isDark, setIsDark] = useState(false);
  
  const toogleMode = () =>{
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "dark" : "light"}>
        {isDark ? <BsSun onClick={toogleMode} size={30}/> : <RiMoonClearFill onClick={toogleMode} size={30}/>}
    </div>
  )
}
