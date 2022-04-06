import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDashboard from '../components/Project';

const ProjectPage = () => {
  const {_id} = useParams();

  return (
    <ProjectDashboard _id={_id} />
  )
}

export default ProjectPage