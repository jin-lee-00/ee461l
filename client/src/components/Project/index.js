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

  // Temp input qty storage
  const [qty1, setQty1] = useState()
  const [qty2, setQty2] = useState()
  

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

  // temp
  const onCheckOut1 = async () => {
    console.log("checkout: " + qty1)
    const res = await fetch("http://localhost:5000/project/checkout/HWSet1/"+qty1)
    const data = await res.json()
    console.log(data)
    console.log("checkout done")
    return data
  }

  const onCheckOut2 = async () => {
    console.log("checkout: " + qty2)
  }

  const onCheckIn1 = async () => {
    console.log("checkin: " + qty1)
  }
  
  const onCheckIn2 = async () => {
    console.log("checkin: " + qty2)
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
                {Object.entries(resources).map(([key, value]) => (
                  <div key={key}>
                    <Label>{value.name}</Label>
                    <Input required
                      name={value._id}
                      type="number"
                      placeholder = "quantity"
                      value={value.name === "HWSet1" ? qty1 : qty2}
                      onChange={value.name === "HWSet1" ? 
                        ((e) => setQty1(e.target.value)) :
                        ((e) => setQty2(e.target.value))
                      }
                    />
                    <input type="button" value="check out" 
                      onClick={value.name === "HWSet1" ? onCheckOut1 : onCheckOut2}
                    />
                    <input type="button" value="check in" 
                      onClick={value.name === "HWSet1" ? onCheckIn1 : onCheckIn2}
                    />
                    <P>Available: {value.availability} </P>
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