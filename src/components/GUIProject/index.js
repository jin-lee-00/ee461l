import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import {
  GUIContainer,
  Header,
  TopLine,
  GUIButton,
  EntryForm,
  FormContainer,
  FormInput,
  FormBtn
} from './GUI.style';
import AddProject from "./AddProject";
import { useNavigate } from "react-router-dom";

const GUIProject = () => {

  let navigate = useNavigate();
  const routeChange = (name) => {
    navigate("/project/" + name)
  }

  const [showAddProject, setShowAddProject] = useState(false)
  const [projects, setProjects] = useState([])
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [searchID, setSearchID] = useState('')

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      setProjects(projectsFromServer)
      console.log(projects)
    }
    
    getProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await fetch("/project/getall")
    const data = await res.json()
    console.log(data)
    return data
  }

  const getInitResources = async () => {
    const res = await fetch("/resource/getall")
    const data = await res.json()
    let init_resources = {}
    for (const [key, value] of Object.entries(data)) {
      console.log(value["name"])
      init_resources[value["name"]] = 0
    }
    console.log(init_resources)
    return init_resources
  }

  const onClick =() => {
    setShowAddProject(!showAddProject)
  }

  const manageProject = (_id) => {
    routeChange(_id)
  }

  const searchProject = (e) => {
    e.preventDefault()
    console.log("search for: " + searchID)
    setDisplayedProjects(projects.filter((project) => project._id === parseInt(searchID)))
    console.log(displayedProjects)
  }

  const deleteProject = (_id) => {
    console.log("test" + _id)
    fetch("/project/delete", {
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
      setDisplayedProjects(displayedProjects.filter((project) => project._id !== _id))
    })
  }


  const addProject = async (project) => {
    const _id = Math.floor(Math.random() * 1000000) + 1
    const resources = await getInitResources()
    console.log(resources)
    const newProject = { _id, ...project, resources}
    fetch("/project/add", {
      method: "POST",
      body: JSON.stringify({
        _id: newProject._id,
        name: newProject.name,
        desc: newProject.description,
        resources: newProject.resources
      }),
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token"),
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    setProjects([...projects, newProject])
    setDisplayedProjects([newProject])
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

      <EntryForm onSubmit={searchProject}>
        <FormContainer>
          <FormInput required
            type='number' 
            placeholder='Project ID'
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />

        </FormContainer>
        <FormBtn type='submit' value='Search Project'/>
      </EntryForm>

      {projects.length > 0 ? <Projects projects={displayedProjects} 
        onManage={manageProject}
        onDelete={deleteProject}
        onSearch={searchProject}
      /> : 'No Projects'}
    </GUIContainer>
  )
}

export default GUIProject