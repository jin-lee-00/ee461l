import React, { useState } from 'react'
import { 
  Container, 
  FormWrap,
  NavLink,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text 
} from './Signup.style'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }

  const handleSubmit = () => {
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name:name,
        email:email,
        password: password
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    //.then(response => console.log(response))
    /*.then(
      message => {
        console.log("Hello")
        setName("")
        setEmail("")
        setPassword("")  
      })*/
  }
  return (
    <>
      <Container>
        <FormWrap>
          <NavLink to="/">HaaS</NavLink>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign Up</FormH1>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" required 
                onChange={handleNameChange}
              />
              <FormLabel>Email</FormLabel>
              <FormInput type="email" required 
                onChange={handleEmailChange}
              />
              <FormLabel>Password</FormLabel>
              <FormInput type="password" required 
                onChange={handlePasswordChange}
              />
              <FormButton type="submit">Sign Up</FormButton>
              <Text>Already have an account? <a href ="/signin">Sign in</a> </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp