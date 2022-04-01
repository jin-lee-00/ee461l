import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../components/layout/layout';
import SignInUpNavBar from '../components/Navbar/SignInUpNavBar';

const SigninPage = () => {
  return (
   <>
     <Layout>
       <SignInUpNavBar/>
      <h1>Sign In Page</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
      <p>Don't have an account? <a href ="/signup">Sign up</a></p>
     </Layout>
   </>
  )
}

export default SigninPage