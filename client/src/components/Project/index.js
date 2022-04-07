import React, { useState, useEffect } from 'react'
import {
  Container,
  Wrap,
  NavLink,
  Content,
  Form,
  H1,
  H2,
  P,
  Label,
  Input
} from './Project.style'

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
    <Container>
      <Wrap>
        <NavLink to='/'>HaaS</NavLink> 
        <Content>
          <Form>
            <H1>{name}</H1>
            <H2>({_id})</H2>
            <P>{desc}</P>
            <>
              {Object.entries(resources).map(([key, value]) =>(
                <H2 key={key}>{key} : {value}</H2>
              ))}
            </>
            <div>
              <Label>HWSet1</Label>
              <Input type="number"/>
              <input type="button" value="check out" />
              <input type="button" value="check in" />
            </div>
          </Form>
        </Content>
      </Wrap>     
    </Container>
  )
}

export default ProjectDashboard