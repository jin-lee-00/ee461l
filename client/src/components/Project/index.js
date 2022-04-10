import React, { useState, useEffect } from 'react'
import {
  Container,
  Wrap,
  NavLink,
  Content,
  Form,
  FormSection,
  H1,
  H2,
  P,
  Label,
  Input
} from './Project.style'

const ProjectDashboard = ({ _id }) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [checkedOut, setCheckedOut] = useState({})
  const [resources, setResources] = useState({})
  const [qty, setQty] = useState({HWSet1: "", HWSet2: ""})
  
  useEffect(() => {
    const getProject = async () => {
      const projectFromServer = await fetchProject()
      console.log("get project")
      console.log(projectFromServer)
      setName(projectFromServer["name"])
      setDesc(projectFromServer["desc"])
      setCheckedOut(projectFromServer["resources"])
    }

    const getResources = async () => {
      const resourcesFromServer = await fetchResources()
      console.log("get resources")
      console.log(resourcesFromServer)
      setResources(resourcesFromServer)
    }
    
    getProject()
    getResources()
  }, [])

  const fetchProject = async () => {
    const res = await fetch("http://localhost:5000/project/get/" + _id)
    const data = await res.json()
    console.log("fetch project")
    console.log(data)
    return data
  }

  const fetchResources = async () => {
    const res = await fetch("http://localhost:5000/resource/getall")
    const data = await res.json()
    console.log("fetch resources")
    console.log(data)
    return data
  }

  const handleQtyChange = (e) => {
    const { name, value } = e.target
    setQty(qty => ({
      ...qty,
      [name]: value
    }))
  }

  const handleCheckOut = async (e) => {
    const {name} = e.target
    console.log("checkout: " + qty[name] + " of " + name)
    const res = await fetch("http://localhost:5000/project/checkout/"+name+"/"+qty[name])
    // error handling
    if(res.status === 400) {
      alert("400: quantity > availability")
    }

    const data = await res.json()
    console.log(data)
    console.log("checkout done")
    setResources(await fetchResources())
    return data
  }

  const handleCheckIn = async (e) => {
    const {name} = e.target
    console.log("checkin: " + qty[name] + " of " + name)
  }

  return (
    <Container>
      <Wrap>
        <NavLink to='/'>HaaS</NavLink> 
        <Content>
          <Form>
            <FormSection>
              <H1>{name}</H1>
              <H2>({_id})</H2>
              <P>{desc}</P>
            </FormSection>
            <FormSection>
              <H2>Checked Out Resources</H2>
              <>
                {Object.entries(checkedOut).map(([key, value]) => (
                  <H2 key={key}>{key} : {value}</H2>
                ))}
              </>
            </FormSection>
            <FormSection>
              <H2>Manage Resources</H2>
              <>
                {Object.entries(resources).map(([key, resource]) => (
                  <div key={key}>
                    <Label>{resource.name}</Label>
                    <Input required
                      name={resource.name}
                      type="number"
                      placeholder = "quantity"
                      value={qty[resource.name]}
                      onChange={handleQtyChange}
                    />
                    <input type="button" 
                      name={resource.name}
                      value="check out" 
                      onClick={handleCheckOut}
                    />
                    <input type="button" 
                      name={resource.name}
                      value="check in" 
                      onClick={handleCheckIn}
                    />
                    <P>Available: {resource.availability} </P>
                  </div>
                ))}
              </>
            </FormSection>
          </Form>
        </Content>
      </Wrap>     
    </Container>
  )
}

export default ProjectDashboard