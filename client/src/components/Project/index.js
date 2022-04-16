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
  const [checkedOut, setCheckedOut] = useState({HWSet1: "", HWSet2: ""})
  const [resources, setResources] = useState({})
  const [qty, setQty] = useState({HWSet1: "", HWSet2: ""})
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      const projectFromServer = await fetchProject()
      console.log("get project")
      console.log(projectFromServer)
      setName(projectFromServer["name"])
      setDesc(projectFromServer["desc"])
      setCheckedOut(projectFromServer["resources"])
      setUsers(projectFromServer["users"])
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
    const res = await fetch("http://localhost:5000/project/"+_id+"/checkout/"+name+"/"+qty[name])
    // update checkedOut, error handling
    if(res.status === 400) {
      alert("400: quantity > availability")
    } else {// success
      console.log(name, qty)
    }

    

    const data = await res.json()
    console.log(data)
    console.log("checkout done")
    setResources(await fetchResources())
    setCheckedOut((await fetchProject())["resources"])
    return data
  }

  const handleCheckIn = async (e) => {
    const {name} = e.target
    console.log("checkin: " + qty[name] + " of " + name)
    const res = await fetch("http://localhost:5000/project/"+_id+"/checkin/"+name+"/"+qty[name])
    // update checkedOut, error handling
    if(res.status === 400) {
      alert("400: quantity > availability")
    } else {// success
      console.log(name, qty)
  }

    

    const data = await res.json()
    console.log(data)
    console.log("checkin done")
    setResources(await fetchResources())
    setCheckedOut((await fetchProject())["resources"])
    return data
  }


  const handleJoinProject = async () => {
    // console.log("JOIN ")
    const s  = sessionStorage.getItem("token")
    console.log(s)
    
    //   const resp = await fetch(`https://your_api.com/protected`, {
    //     method: 'GET',
    //     headers: { 
    //       "Content-Type": "application/json"
    //       'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
    //     } 
    //  })
    const res = await fetch("http://localhost:5000/project/join/"+_id, {
      headers: {"Authorization" : 'Bearer ' +  s}
    })
    // update checkedOut, error handling
    // if(res.status === 400) {
    //   alert("Error")
    // } else {// success
    //   console.log(res)
    // }

    const data = await res.json()
    console.log(data)
    setUsers((await fetchProject())["users"]);
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
            <FormSection>
              <H2>Users</H2>
              <> 
                {users.map((user, index) => {
                  return <P
                  key={index}
                  >{user}</P>
                })}
              </>
            </FormSection>
            <FormSection>
              <input type = "button"
                value = "join project"
                onClick={handleJoinProject}
              />
            </FormSection>
            
          </Form>
        </Content>
      </Wrap>     
    </Container>
  )
}

export default ProjectDashboard