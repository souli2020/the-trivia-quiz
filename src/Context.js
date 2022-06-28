 import React,{useState} from "react"
 import { nanoid } from 'nanoid' 
 const Context = React.createContext()



 function ContextProvider({children}){
    const [input, setInput] = useState('')
    const[quiz, setQuiz] = useState([])
    const[answers, setAnswers] = useState([])
    const[questionId, setQuestionId] = useState([])
    const[show, setShow] = useState(false)
    const [start, setStart] = useState(false)
     const [count, setCount] = useState(0)
   
            function on(){
               return answers.length === 5 ? setShow(true) : setShow(false)
            }
            function off(){
                setStart(false)
                setShow(false)
                setCount(0)
            }
            function handleChange(e){

                setInput(e.target.value)
                setAnswers(prev => [])
                

             }
            

                   const submit = async (e) => {
                    
                       e.preventDefault();
                       try{
     
                         e.preventDefault()
                         const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${input}&type=multiple`)
                         const data = await res.json()
                         let updated = data.results.map(question => (
                             {...question, answers:[ question.correct_answer, ...question.incorrect_answers], id:{nanoid} }
                             ))
                     setQuiz(prev => updated)
                     setStart(true)
                       }catch(err){
                         console.log(err)
                     }
      }
            

                   function addToAnswers(answer, id){
                            setCount(prev => prev +1)
                            setQuestionId(prev => [...prev, id])
                           if(!answers.includes(answer) && !questionId.includes(id)){

                           setAnswers(prev => [...prev, answer])

                               }


                   }




    return(
        <Context.Provider value={{
             input,
              handleChange,
              submit,
              quiz, 
              answers,
              addToAnswers,
              show,
              on, 
              start,
              off,
             count
          
             
        }}>
            {children}
        </Context.Provider>
    )
 }
 export{ContextProvider, Context}
