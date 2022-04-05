import React, { useState } from 'react'
import Project from './Project'

const Projects = ({ projects, onManage, onDelete }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Project key={index} project={project} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Projects