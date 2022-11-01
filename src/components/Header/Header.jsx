import React, {useContext} from 'react'
import { Link } from "react-router-dom";

//  React Icons
import { FiMenu } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// Internal imports
import './header.css'
import { ThemeContext } from '../../contexts/ThemeContext';

// Mini components
import Logo from "../_miniComponent/Logo"

const Header = () => {
  const {isNavActive, setIsNavActive} = useContext(ThemeContext)

  return (
    <div className="header">
      <Logo />
      {/* <div className="controlGroup">
        <div className="lightControl">
          <MdNightlight />
          <MdLightMode />
        </div>
        <FiMenu className="hamburger" onClick={() => setIsNavActive(!isNavActive)}/>
      </div>
      <nav className="nav">
        <Link exact="true" to="/" className="link">Projects</Link>
        <Link to="/about" className="link">About Me</Link>
      </nav>       */}
    </div>
  )
}

export default Header