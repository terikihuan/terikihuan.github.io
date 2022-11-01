import React from 'react'
import './footer.css'

// React icons
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";

// Mini Components
import Logo from '../_miniComponent/Logo'

const Footer = () => {
  return (
    <div className="footer">
      <Logo fontSize="2.5rem"/>
      <div className="contactInfo">
        <div><MdEmail className="footer__icon"/>terikihuan@gmail.com </div>
        <div><FaLinkedinIn className="footer__icon"/>in/huan-zhao-6b3ab7117/</div>
        <div><FaGithub className="footer__icon"/> /terikihuan</div>
      </div>
      &copy; 2022
    </div>
  )
}

export default Footer