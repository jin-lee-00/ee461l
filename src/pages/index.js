import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SectionHaaS from '../components/SectionHaaS'
import SectionContent from '../components/SectionContent'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/SectionContent/Content'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      console.log("Is logged in");
      setIsLoggedIn(true);
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

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isLoggedIn={isLoggedIn} logOut={logOut}/>
      <SectionHaaS
        isLoggedIn={isLoggedIn}
      />
      <SectionContent {...homeObjOne} />
      <SectionContent {...homeObjTwo} />
      <SectionContent {...homeObjThree} />
      <SectionContent {...homeObjFour} />
    </>
  )
}

export default Home