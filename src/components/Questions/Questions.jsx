import React, { useState} from 'react'
import { QuestionsCon } from './Styled';

const Questions = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false);
  return (
    <QuestionsCon>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <div style={{ background: '#303030', fontSize: '1.5rem', width: "650px", marginBottom: "0.5rem", display: "flex", justifyContent: "space-between"}}>
          <h3>{title}</h3>
          <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? '-' : '+'}
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        {showInfo && <p style={{ background: '#303030', fontSize: '0.9rem', width: "650px", padding: "1rem 2rem"}}>{info}</p>}
      </div>
    </QuestionsCon>
  )
}

export default Questions