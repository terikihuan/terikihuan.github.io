import React from 'react'
import Color from 'color'
import './projects.css'

// React icons
import { GrTechnology } from "react-icons/gr";
import { RiLayout5Fill } from "react-icons/ri";

// Mini Components
// import Button from '../_miniComponent/Button'
import Button from '../_miniComponent/Button.js'

const SingleProject = ({project}) => {
  const {title, description, project_type, technology, image, website_link, theme_color} = project

  const textColor = Color(theme_color).isLight() ? "#000" : "#fff"

  return (
    <div className="singleProject">
      <div className="projectInfo">
        <h2 className="projectTitle">{title}</h2>
        <p className="projectDesc">{description}</p>
        <div className="postDesc">
          <div className="extraInfo">
            <div className="icon__Wrapper"><GrTechnology /></div> 
            Project type: <br />{project_type}
          </div>
          <div className="extraInfo"> 
            <div className="icon__Wrapper"><RiLayout5Fill /></div>
            Technologies: <br />{technology}
          </div>
        </div>
        <div className="projectLink">
          <a href={website_link} className="">
            <Button backgroundColor={theme_color} textColor={textColor} className="projectBtn">View</Button>
          </a>
        </div>
      </div>
      <div className="projectImg__Wrapper">
        <img src={image} alt="" className="projectImg"/>
      </div>
      
    </div>
  )
}

export default SingleProject