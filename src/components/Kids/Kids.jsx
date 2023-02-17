import React from 'react'
import kidsImg from "../../assets/kids.png"

const Kids = () => {
  return (
    <div>
        <div>
            <img src={kidsImg} alt="kidsImg" />
        </div>
        <div>
            <h3>สร้างโปรไฟล์สำหรับเด็ก</h3>
            <p>เปิดโลกแห่งการผจญภัยให้บุตรหลานด้วยตัวละคร<br/>โปรดในโปรไฟล์มุมเด็กที่คุณจะใช้งานได้ฟรีเมื่อ<br/>สมัครสมาชิก</p>
        </div>
    </div>
  )
}

export default Kids