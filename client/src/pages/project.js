import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
  const {_id} = useParams();

  return (
    <>
      <h1>Manage Project</h1>
      <p>Project ID: {_id}</p>
    </>
  )
}

export default ProjectPage