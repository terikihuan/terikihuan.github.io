import React from 'react'

// Components
import SingleProject from './SingleProject'

// Internal imports
import projects from '../../data/projects.json'

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => <SingleProject key={index} project={project} />)}
    </div>
  )
}

export default Projects