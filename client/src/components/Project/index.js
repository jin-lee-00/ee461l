import React, { useState, useEffect } from 'react'

const ProjectDashboard = ({ _id }) => {
  useEffect(() => {
    const getProject = async () => {
      const projectFromServer = await fetchProject()
      console.log("get project")
      console.log(projectFromServer)
    }
    
    getProject()
  }, [])

  const fetchProject = async () => {
    const res = await fetch("http://localhost:5000/project/get/" + _id)
    const data = await res.json()
    console.log("fetch project")
    console.log(data)
    return data
  }

  return (
    <>
      <div>Project Dashboard</div>
      <div>{_id}</div>
    </>
  )
}

export default ProjectDashboard