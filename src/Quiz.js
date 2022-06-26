import React, { useContext} from "react";
import { nanoid } from 'nanoid'
import { Context } from "./Context";
var he = require('he');
export default function Quiz(){
    const{quiz, addToAnswers, answers,show, on, off} = useContext(Context)
   

    return(
        <div key={nanoid()}>
   
            <div>
            {
                quiz.map(q =>(
                   <div key={nanoid()}>
                    <h1  className="question-title">{he.decode(q.question)}</h1>
                     <div className="answers-container">
                    {q.answers.map(answer =>(
                     <h3 key={nanoid()} 
                     className={show ?  !answers.includes(answer) ? answer !== q.correct_answer?  "answer ":"bg-green" :"bg-red" :"answer" }
                    onClick={(e)=> addToAnswers(answer, q.id)}
                     
                    >{he.decode(answer)}</h3>
                     
                    ))}
                    </div>
                   
                   </div > 
                ))
            }
            </div>
            {!show && <button className="btn-submit check"
            
            onClick={() => on()}
            >Check answers</button>}
           {show && <button className="btn-submit check"
            
            onClick={() => off()}
            >Try again</button>}
        </div>
    )
}