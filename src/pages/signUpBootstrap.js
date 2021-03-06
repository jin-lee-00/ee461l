import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../components/layout/layout';
import SignInUpNavBar from '../components/Navbar/SignInUpNavBar';

const SignUpPage = () => {
  return (
    <>
     <Layout>
       <SignInUpNavBar/>
        <h1>Sign Up Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
        <p>Already have an account? <a href="/sign-in">Sign in</a></p>
     </Layout>
    </>
  )
}

export default SignUpPage