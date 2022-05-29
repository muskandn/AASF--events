import React from "react";
import "./footer.css"
import AASFLogo from "../../assets/svgIcons/aasflogo"
import { Link } from "react-router-dom";

function Footer(){
 return(
 <div> 
 

 
<div className="footer">
 <div className="inner-footer">


   <div className="footer-logo-container">
     <AASFLogo />

     
     <p>Address: A201, <br />
ABV-Indian Institute of Information Technology and Management Gwalior,<br /> 
Morena Link Road, Gwalior, Madhya Pradesh, India, 474015.</p>   
   </div>

<div></div>
   <div className="footer-items">
     <h5>General</h5>
     <div className="border1"></div> 
       <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/"><li>Login</li></Link>
         
       </ul>
   </div>


   <div className="footer-items">
     <h5>Explore</h5>
     <div className="border1"></div>  
       <ul>
         <Link to="/abhishar"><li>Abhishar</li></Link>
         <Link to="/blogs"><li>Blogs</li></Link>
         <Link to="/events"><li>Events</li></Link>
         <Link to="/team"><li>Team</li></Link>
       </ul>
   </div>


   <div className="footer-items">
     <h5>Help</h5>
     <div className="border1"></div>
       <ul>
         <li>aasf@iiitm.ac.in</li>
         <li>aasf.iiitm@gmail.com</li>
         <li>Contact us</li>
       </ul> 
     </div>

       <div className="social-media">
         <div className="terms">
           <div className="lower-footer">Terms and Conditions</div>
           <div className="lower-footer">Privacy Policy</div>
           </div>
           <div>
         <a href="#"><i className="fab fa-linkedin-in"></i></a>
         <a href="#"><i className="fab fa-instagram"></i></a>
         <a href="#"><i className="fab fa-facebook-f"></i></a>
         <a href="#"><i className="fab fa-google-plus-square"></i></a>
         <a href="#"><i className="fab fa-youtube"></i></a>
         </div>
         
         
       </div> 
   </div>
 
 

 {/* <div className="footer-bottom">
   Copyright &copy; Food and Burps 2020.
 </div> */}
</div>
 

 </div>)
}

export default Footer;