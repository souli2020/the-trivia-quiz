////بسم الله الرحمان الرحيم و الصلاة و السلام على اشرف المرسلين
import React from "react"

import "./index.css"
import ReactDOM  from "react-dom"
import App from "./App"
import { ContextProvider } from "./Context"

const root = document.getElementById('root')
ReactDOM.render(
    <ContextProvider >
         <App />
    </ContextProvider>


, root)