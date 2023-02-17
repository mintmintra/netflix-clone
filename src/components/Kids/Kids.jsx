import React from 'react'
import kidsImg from "../../assets/kids.png"
import { KidsCon } from './Styled'

const Kids = () => {
  return (
    <KidsCon>
        <div style={{ width: '100%'}}>
            <img width="100%" src={kidsImg} alt="kidsImg" />
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center'}}>
            <div>
                <h3 style={{ fontSize: '3rem'}}>สร้างโปรไฟล์สำหรับเด็ก</h3>
                <p style={{ fontSize: '1.5rem'}}>เปิดโลกแห่งการผจญภัยให้บุตรหลานด้วยตัวละคร<br/>โปรดในโปรไฟล์มุมเด็กที่คุณจะใช้งานได้ฟรีเมื่อ<br/>สมัครสมาชิก</p>
            </div>
        </div>
    </KidsCon>
  )
}

export default Kids