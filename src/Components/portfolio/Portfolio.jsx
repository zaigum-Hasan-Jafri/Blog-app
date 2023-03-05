import './Portfolio.scss'
// import { certificates } from "../../data"
import React from 'react'
import Footer from '../Footer/Footer'
const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      <h1 style={{ letterSpacing: '0.1rem', color: "#FFB3C1", fontWeight: "bold", }}>Certificates</h1>
      <div className='certificates'>
        <div className="leftWing">
          <img src={require("../../assets/banner/Certification.png")} alt="" width="100%" height="100%" />
        </div>
        <div className="rightWing">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Portfolio