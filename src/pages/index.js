import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SectionHaaS from '../components/SectionHaaS'
import SectionContent from '../components/SectionContent'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/SectionContent/Content'
import { Navigate } from 'react-router-dom'

const Home = ( dark, toggle_dark ) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      console.log("Is logged in");
      setIsLoggedIn(true);
      setCurrentUser(sessionStorage.getItem('name'))
    } else {
      console.log("Is not signed in")
    }
  });

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const logOut = () => {
    // fetch("http://localhost:5000/logout", {
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // })
    // .then(data => {
    //   console.log(data)
    // })
    sessionStorage.clear();
    setIsLoggedIn(false);
  }

  if (sessionStorage.getItem("token") === null) {
    return <Navigate replace to={'/signin'} />
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isLoggedIn={isLoggedIn} logOut={logOut}/>
      <SectionHaaS
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        dark={dark}
        toggle_dark={toggle_dark}
      />
      <SectionContent {...homeObjOne} />
      <SectionContent {...homeObjTwo} />
      <SectionContent {...homeObjThree} />
      <SectionContent {...homeObjFour} />
    </>
  )
}

export default Home