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
      <div style={{ padding: "3rem", background: "#000", color: "#fff", textAlign: "center", borderBottom: "8px solid #222"}}>
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem"}}>คำถามที่พบบ่อย</h3>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{ margin: "2rem 0", fontSize: "1.2rem"}}>หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง</p>
        <input style={{ width: "500px", padding: "1.5rem 2rem"}} type="email" placeholder="ที่อยู่อีเมล" />
        <button style={{ width: "200px", padding: "1.5rem 1rem", color: '#fff', backgroundColor: '#e50914', fontSize: "1rem", border: "none", position: "relative", top: "3px"}} type="submit">เริ่มต้นใช้งาน</button>
      </div>
    </div>
  )
}

export default App
