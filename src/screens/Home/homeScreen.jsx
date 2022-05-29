import React from 'react'
import './homeScreen.css'
import Navbar from '../../components/Navbar/navbar'

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="homepage-section">
        <div>
          <div className="homepage-headings">Heading</div>
          <div className="homepage-text">Text</div>
        </div>
        <div className="homepage-image">
          <img
            alt="teaching"
            src="https://res.cloudinary.com/dzerj4bzd/image/upload/v1653836937/AASF%20Website/homepage-teaching_aiiuv2.png"
          ></img>
        </div>
      </div>
      <div className="homepage-section">Home</div>
      <div className="homepage-section">Home</div>
      <div className="homepage-section">Home</div>
    </div>
  )
}

export default HomeScreen
