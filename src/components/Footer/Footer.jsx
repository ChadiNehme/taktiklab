import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <h2 className='logo-textt'>Taktik<span>Lab</span></h2>
          <p>At Taktik Lab, we believe in the power of community and innovation. Join us to connect with
            like-minded creative individuals, gain new skills, and transform your ideas into reality.</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/share/1L1k4cU4wZ/?mibextid=wwXIfr" target='_blank' rel='noopner noreferrer'><PiFacebookLogoBold cursor="pointer" size="40px" /></a>
            <a href="https://www.instagram.com/taktiklablb?igsh=aTFuaHV2c2Z0aGRr" target='_blank' rel='noopner noreferrer'> <FaInstagram cursor="pointer" size="40px" /></a>
            <a href="https://www.linkedin.com/company/taktiklablb/" target='_blank' rel='noopner noreferrer'><PiLinkedinLogoBold cursor="pointer" size="40px" /></a>




          </div>
        </div>

        <div className="footer-content-center">
          <h2>CPMPANY </h2>
          <ul>
            <li><Link to=".">Home</Link></li>
            <li><Link to="about">About us</Link></li>

          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:96171201299">96171201299</a></li>
            <li><a href="mailto:taktiklablb@gmail.com" target="_blank">taktiklablb@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {new Date().getFullYear()} ©  ALL Right Reserved.</p>
    </div>
  )
}

export default Footer
