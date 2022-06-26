import React, { useContext } from "react";
import Quiz from "./Quiz";
import Start from "./startPage";
import { Context } from "./Context";


export default function App(){
    const{start} = useContext(Context)
    
    return(
    
    <>
    
  {!start && <Start />}
  {start && <Quiz  />}
    </>
    
    
    
    )
}