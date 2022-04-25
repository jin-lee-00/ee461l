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
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/user/signin", {
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
          if (data.status === 200) {
            console.log(data)

            fetch("/token", {
                method: "POST",
                body: JSON.stringify({
                  email:email
                }),
                headers: {
                  "Content-type": "application/json"
                }
              })
              .then(tokendata => {
                console.log(tokendata)
                if (tokendata.status === 200) return tokendata.json();
                else alert("Token fetch error");
              })
              .then(tokendata => {
                  sessionStorage.setItem("token", tokendata.token)
                  sessionStorage.setItem("name", tokendata.name)
              })
              .catch(error => {
                  console.error("Storing token error", error);
            })
            setEmail("")
            setPassword("")
            setTimeout(() => {
              navigate("/")
            }, 1000);

          } else if (data.status === 400) {
            console.log(data)
            alert('User does not exist, sign up instead')
          } else if (data.status === 401) {
            console.log(data)
            alert('Password does not match')
          }
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