import React from 'react'
import { FooterCon, FooterList } from './Styled'

const Footer = () => {
  return (
    <FooterCon>
        <p>หากมีคำถาม โทร 1-800-012-294</p>
        <FooterList>
            <ul>
                <li><a href="#">คำถามที่พบบ่อย</a></li>
                <li><a href="#">นักลงทุนสัมพันธ์</a></li>
                <li><a href="#">วิธีรับชม</a></li>
                <li><a href="#">ข้อมูลบริษัท</a></li>
                <li><a href="#">ที่ Netflix เท่านั้น</a></li>
            </ul>
            <ul>
                <li><a href="#">ศูนย์ช่วยเหลือ</a></li>
                <li><a href="#">ตำแหน่งงาน</a></li>
                <li><a href="#">ข้อกำหนดการใช้งาน</a></li>
                <li><a href="#">ติดต่อเรา</a></li>
            </ul>
            <ul>
                <li><a href="#">บัญชี</a></li>
                <li><a href="#">แลกบัตรของขวัญ</a></li>
                <li><a href="#">ความเป็นส่วนตัว</a></li>
                <li><a href="#">ทดสอบความเร็ว</a></li>
            </ul>
            <ul>
                <li><a href="#">ศูนย์สื่อมวลชน</a></li>
                <li><a href="#">ซื้อบัตรของขวัญ</a></li>
                <li><a href="#">การตั้งค่าคุกกี้</a></li>
                <li><a href="#">ประกาศแจ้งทางกฎหมาย</a></li>
            </ul>
        </FooterList>
        <a href="#" style={{ padding: "1rem 2rem", border: "1px solid #737373", borderRadius: "5px", display: "inline-block", marginBottom: "1rem", color: "#737373", textDecoration: "none"}}>ไทย</a>
        <p>Netflix ไทย</p>
    </FooterCon>
  )
}

export default Footer