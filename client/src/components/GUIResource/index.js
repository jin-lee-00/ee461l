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
    const res = await fetch("http://localhost:5000/resource/getall")
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
    fetch("http://localhost:5000/resource/delete", {
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
    const newResource = { _id, ...resource}
    fetch("http://localhost:5000/resource/add", {
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

/*
export class GUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      primary: true
    };
  }

  render() {
    return (
      <GUIContainer primary={this.state.primary}>
        <TextWrapper>
          <TopLine>Mock {this.props.topline} Display </TopLine>
          <Heading primary={this.state.primary}
            onClick={() =>
              this.setState({ primary: !this.state.primary})}
          >
            {this.state.count}
          </Heading>
        </TextWrapper>
        <ContentRow>
          <Column1>
            <GUIButton onClick={() =>
              this.setState({ count: this.state.count + 1})}
            >
              +
            </GUIButton>
          </Column1>
          <Column2>
            <GUIButton onClick={() =>
              this.setState({ count: this.state.count - 1})}
            >
              -
            </GUIButton>
          </Column2>
        </ContentRow>
      </GUIContainer>
    );
  }
}
*/