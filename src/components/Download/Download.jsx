import React from 'react'
import mobileImg from '../../assets/mobile.jpg'
import boxshot from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

import { DownloadCon } from './Styled'

const Download = () => {
  return (
    <DownloadCon>
        <div style={{ width: "100%" ,position: 'relative'}}>
            <img width="100%" src={mobileImg} alt="" />
            <div style={ { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 66%)', border: '2px solid hsla(0,0%,100%,.25)', borderRadius: '10px', background: '#000', display: 'flex', padding: '0.5rem', width: '60%', height: '100px', justifyContent: 'space-between'}}>
                <img src={boxshot} alt="" />
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px'}}>
                    <p>สเตรนเจอร์ ธิงส์<br/>
                        <span style={{ color: '#0071eb', fontSize: '0.9rem'}}>กำลังดาวน์โหลด...</span>
                    </p>
                    
                </div>
                <img src={downloadIcon} alt="" />
            </div>
        </div>
        <div style={{ width: "100%", display: 'flex', alignItems: 'center'}}>
            <div>
                <h3 style={{ fontSize: '2.8rem'}}>ดาวน์โหลดเนื้อหาไว้รับชม<br/>ออฟไลน์</h3>
                <p style={{ fontSize: '1.5rem', marginTop: '1rem'}}>บันทึกเนื้อหาโปรดได้ง่ายๆ และมีความบันเทิงพร้อม <br />ให้รับชมอยู่เสมอ</p>
            </div>
        </div>
    </DownloadCon>
  )
}

export default Download