import React from 'react'
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
  return (
    <>
      <Container>
        <FormWrap>
          <NavLink to="/">HaaS</NavLink>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In</FormH1>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel>Password</FormLabel>
              <FormInput type="password" required />
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