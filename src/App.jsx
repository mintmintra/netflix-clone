import React,{ useState} from "react"
import Header from "./components/Header/Header"
import Enjoy from "./components/Enjoy/Enjoy"
import Download from "./components/Download/Download"
import Watch from "./components/Watch/Watch"
import Kids from "./components/Kids/Kids"
import Questions from "./components/Questions/Questions"
import './App.css'

import data from './data'
function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      {questions.map((question) => {
        return <Questions key={question.id} {...question} />
      })}
    </div>
  )
}

export default App
