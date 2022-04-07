import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NavLink as LinkRoute } from 'react-router-dom'

const ProjectDashboard = ({ _id }) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [resources, setResources] = useState({})

  useEffect(() => {
    const getProject = async () => {
      const projectFromServer = await fetchProject()
      console.log("get project")
      console.log(projectFromServer)
      setName(projectFromServer["name"])
      setDesc(projectFromServer["desc"])
      setResources(projectFromServer["resources"])
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
      <div>Project: {name}</div>
      <div>ID: {_id}</div>
      <div>Description: {desc}</div>
      <>
        {Object.entries(resources).map(([key, value]) =>(
          <p key={key}>{key} : {value}</p>
        ))}
      </>
      <NavLink to='/'>Back to Home</NavLink> 
    </>
  )
}

export default ProjectDashboard