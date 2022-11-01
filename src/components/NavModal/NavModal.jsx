import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import './navmodal.css'

// Internal imports
import { ThemeContext } from '../../contexts/ThemeContext';

const NavModal = () => {
  const {isNavActive, setIsNavActive} = useContext(ThemeContext)

  // Effects
  useEffect(() => {
    setIsNavActive(false)
  }, [])
  

  return (
    <div className={`navModal ${isNavActive || "hide"}`}>
      <nav className="navModal__nav">
        <Link exact="true" to="/" className="link">Projects</Link>
        <Link to="/about" className="link">About Me</Link>
      </nav>
    </div>
  )
}

export default NavModal