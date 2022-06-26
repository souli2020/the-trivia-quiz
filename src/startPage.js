import React,{useContext} from "react";
import { Context } from "./Context";


export default function Start(){
    const{handleChange, input, submit} = useContext(Context)
    return(
       <div className="container">
        
        <h1 className="start--title">QUIZZICAL</h1>
        <p className="start--desc">PUT YOUR KNOWLEDGE ON TEST WITH OUR POWERFUL QUIZ!</p>
        <form className="form" onSubmit={submit}>
             
             <fieldset >
                        <select 
                        className="input"
                         name="input"

                         value={input}
                            onChange={(e)=> handleChange(e)}
                         >
                        <option value="---">--choose a Category--</option>
                        <option  value="25">Arts</option>
                        <option value="10">Books</option>
                        <option value="24">Politics</option>
                        <option value="32">Cartoon</option>
                        <option value="16">Entertainment</option>
                        
                    
                        </select>
        </fieldset>
            <button className="btn-submit"  >START THE QUIZ!</button>

        </form>
        
        </div>
    
    
    )
}