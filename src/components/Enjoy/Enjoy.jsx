import React from 'react'
import tvImg from '../../assets/tv.png'
import { EnjoyCon } from './Styled'

const Enjoy = () => {
  return (
    <EnjoyCon>
        <div style={{ display: "flex", alignItems: "center", width: "100%"}}>
            <div>
              <h3 style={{ fontSize: "3rem", color: "#fff"}}>รับชมได้ในทีวี</h3>
              <p style={{ fontSize: "1.5rem", color: "#fff", marginTop:"1rem"}}>รับชมได้ในสมาร์ททีวี Playstation, Xbox,<br/>
                  Chromecast, Apple TV เครื่องเล่น Blu-ray และอีก<br/>
                  มากมาย
              </p>
            </div>
        </div>
        <div style={{position: 'relative', width: "100%"}}>
            <img style={{position: 'relative', zIndex: '1', width: "100%"}} src={tvImg} alt="" />
            <video style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-54%)', width: "73%"}} autoPlay playsInline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" /></video>
        </div>
    </EnjoyCon>
  )
}

export default Enjoy