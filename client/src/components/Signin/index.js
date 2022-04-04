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
} from './Signin.style'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify({ 
        email: email, 
        password: password
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setEmail("")
      setPassword("")
    }
    )
  }

  return (
    <>
      <Container>
        <FormWrap>
          <NavLink to="/">HaaS</NavLink>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign In</FormH1>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" required 
                onChange={handleEmailChange}
              />
              <FormLabel>Password</FormLabel>
              <FormInput type="password" required 
                onChange={handlePasswordChange}
              />
              <FormButton type="submit">Sign In</FormButton>
              <Text>Don't have an account? <a href ="/signup">Sign up</a> </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn