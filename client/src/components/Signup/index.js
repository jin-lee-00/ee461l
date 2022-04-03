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
} from './Signup.style'

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <NavLink to="/">HaaS</NavLink>
          <FormContent>
            <Form action="#">
              <FormH1>Sign Up</FormH1>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel>Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel>Password</FormLabel>
              <FormInput type="password" required />
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