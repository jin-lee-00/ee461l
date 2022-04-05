import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import {
  GUIContainer,
  Header,
  TopLine,
  GUIButton
} from './GUI.style';
import AddProject from "./AddProject";

const GUIProject = () => {
  const [showAddProject, setShowAddProject] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      setProjects(projectsFromServer)
      console.log(projects)
    }
    
    getProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/project/getall")
    const data = await res.json()
    console.log(data)
    return data
  }

  const onClick =() => {
    setShowAddProject(!showAddProject)
  }

  const manageProject = (name) => {
    alert("manage project " + name)
  }

  const deleteProject = (_id) => {
    console.log("test" + _id)
    fetch("http://localhost:5000/project/delete", {
      method: "POST",
      body: JSON.stringify({
        _id: _id
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProjects(projects.filter((project) => project._id !== _id))
    })
  }


  const addProject = (project) => {
    const _id = Math.floor(Math.random() * 1000000) + 1
    const newProject = { _id, ...project}
    fetch("http://localhost:5000/project/add", {
      method: "POST",
      body: JSON.stringify({
        _id: newProject._id,
        name: newProject.name,
        desc: newProject.description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    setProjects([...projects, newProject])
  }

  return (
    <GUIContainer primary='true'>
      <Header>
        
        <TopLine>Projects</TopLine>
        <GUIButton 
          onClick={onClick}
        >
          {showAddProject ? '-' : '+'}
        </GUIButton>
      </Header>
      {showAddProject && <AddProject onAdd={addProject}/>}
      {projects.length > 0 ? <Projects projects={projects} 
        onManage={manageProject}
        onDelete={deleteProject}
      /> : 'No Projects'}
    </GUIContainer>
  )
}

export default GUIProject