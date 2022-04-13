import React, { useState, useEffect } from "react";
import Resources from "./Resources";
import {
  GUIContainer,
  Header,
  TopLine,
  GUIButton
} from './GUI.style';
import AddResource from "./AddResource";

const GUIResource = () => {
  const [showAddResource, setShowAddResource] = useState(false)
  const [resources, setResources] = useState([])

  useEffect(() => {
    const getResources = async () => {
      const resourcesFromServer = await fetchResources()
      setResources(resourcesFromServer)
      console.log(resources)
    }
    
    getResources()
  }, [])

  const fetchResources = async () => {
    const res = await fetch("/resource/getall")
    const data = await res.json()
    console.log(data)
    return data
  }

  const onClick =() => {
    setShowAddResource(!showAddResource)
  }

  const manageResource = (name) => {
    alert("manage resource " + name)
  }

  const deleteResource = (_id) => {
    console.log("test" + _id)
    fetch("/resource/delete", {
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
      setResources(resources.filter((resource) => resource._id !== _id))
    })
  }


  const addResource = (resource) => {
    const _id = Math.floor(Math.random() * 10000) + 1
    const availability = resource.capacity
    const newResource = { _id, ...resource, availability}
    fetch("/resource/add", {
      method: "POST",
      body: JSON.stringify({
        _id: newResource._id,
        name: newResource.name,
        capacity: newResource.capacity
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    setResources([...resources, newResource])
  }

  return (
    <GUIContainer primary='true'>
      <Header>
        
        <TopLine>Resources</TopLine>
        <GUIButton onClick={onClick}>
          {showAddResource ? '-' : '+'}
        </GUIButton>
      </Header>
      {showAddResource && <AddResource onAdd={addResource}/>}
      {resources.length > 0 ? <Resources resources={resources} 
        onManage={manageResource}
        onDelete={deleteResource}
      /> : 'No Resources'}
    </GUIContainer>
  )
}

export default GUIResource