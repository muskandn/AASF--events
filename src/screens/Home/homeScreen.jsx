import React from 'react'
import { Link } from 'react-router-dom'
import './homeScreen.css'
import Navbar from '../../components/Navbar/navbar'
import CustomButton from '../../components/custom-button/CutsomButton'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-parallax-tilt'

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="homepage-section">
        <Fade left>
          <div className="homepage-content-box">
            <div className="homepage-headings homepage-college-name">
              ABV - IIITM Gwalior
            </div>
            <div className="homepage-headings aasf-heading">
              Abhigyan Abhikaushalam Students' Forum
            </div>
            <div className="homepage-text">
              AASF works to conjugate knowledge and skills into a single bunch.
              The forum also aims to inculcate in the students the spirit of
              excellence in every field along with promoting innovative ideas.
            </div>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow="true" tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="homepage-image">
              <img
                alt="teaching"
                src="https://res.cloudinary.com/dzerj4bzd/image/upload/v1653836937/AASF%20Website/homepage-teaching_aiiuv2.png"
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className="homepage-section">
        <Fade left>
          <div className="homepage-content-box">
            <div className="homepage-headings">Our Vision</div>
            <div className="homepage-text">
              Abhigyan Abhikaushalam Students’ Forum aims to construct this
              shoreline and helps in constructing the further path. It works to
              conjugate the knowledge and skills into a single bunch. Knowledge
              is incomplete in itself, unless it is complemented by skills. This
              forum aims in providing the right kind of knowledge to the
              students and development of skills.
            </div>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow="true" tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="homepage-image">
              <img
                alt="rocket"
                src="https://res.cloudinary.com/dzerj4bzd/image/upload/v1654251556/AASF%20Website/homepage-rocket_wfv6jp.png"
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className="homepage-section">
        <Fade left>
          <div className="homepage-content-box">
            <div className="homepage-headings homepage-abhishar-heading">
              Abhishar
            </div>
            <div className="homepage-text homepage-abhishar-text">
              <b>“Abhishar”</b>, the annual magazine of AASF, contains articles
              by students, alumni and the institute’s faculty and serves as a
              medium to exchange ones thoughts and experiences. The highlights
              of the happenings at the institute and insight on techno-
              managerial topics are the baits of the magazine.
            </div>
            <Link className='homepage-text homepage-abhishar-button' exact to='/abhishar'>
              <CustomButton customButton__text="ABHISHAR"/>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow="true" tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="homepage-image">
              <img
                alt="abhishar"
                src="https://res.cloudinary.com/dzerj4bzd/image/upload/v1654114321/AASF%20Website/homepage-abhishar_ugkdqk.png"
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className="homepage-section">
        <Fade left>
          <div className="homepage-content-box">
            <div className="homepage-headings">
              Download
              <br />
              Our Android App
            </div>
            <div className="homepage-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially
            </div>
            <Link className='homepage-text' exact to='/'>
              <CustomButton customButton__text="DOWNLOAD"/>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow="true" tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="homepage-image">
              <img
                alt="mobile-app"
                src="https://res.cloudinary.com/dzerj4bzd/image/upload/v1654114300/AASF%20Website/homepage-app_xuhz1u.png"
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
    </div>
  )
}

export default HomeScreen
