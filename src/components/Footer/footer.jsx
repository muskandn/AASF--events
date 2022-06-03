import React from 'react'
import './footer.css'
import AASFLogo from '../../assets/svgIcons/aasflogo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-logo-container">
            <AASFLogo width={113} height={129} />

            <p>
              Address: A201, <br />
              ABV-Indian Institute of Information Technology and Management
              Gwalior,
              <br />
              Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.
            </p>
          </div>

          <div></div>
          <div className="footer-items">
            <h5>General</h5>
            <div className="footer-border"></div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>Login</li>
              </Link>
            </ul>
          </div>

          <div className="footer-items">
            <h5>Explore</h5>
            <div className="footer-border"></div>
            <ul>
              <Link to="/abhishar">
                <li>Abhishar</li>
              </Link>
              <Link to="/blogs">
                <li>Blogs</li>
              </Link>
              <Link to="/events">
                <li>Events</li>
              </Link>
              <Link to="/team">
                <li>Team</li>
              </Link>
            </ul>
          </div>

          <div className="footer-items">
            <h5>Help</h5>
            <div className="footer-border"></div>
            <ul>
              <li>
                <a href='mailto:aasf@iiitm.ac.in'>aasf@iiitm.ac.in</a></li>
              <li><a href='mailto:aasf.iiitm@gmail.com'>aasf.iiitm@gmail.com</a></li>
              <li><Link exact to="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div className="social-media">
            <div className="terms">
              <div className="lower-footer">Terms and Conditions</div>
              <div className="lower-footer">Privacy Policy</div>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/aasf-iiitmg/posts/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/aasf_iiitmg/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/aasfiiitm/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://medium.com/tech-iiitg">
                <i className="fab fa-medium"></i>
              </a>
              <a href="https://www.youtube.com/c/AASFIIITM">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
