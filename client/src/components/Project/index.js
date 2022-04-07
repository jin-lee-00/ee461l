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
                    <Input type="number"/>
                    <input type="button" value="check out" />
                    <input type="button" value="check in" />
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