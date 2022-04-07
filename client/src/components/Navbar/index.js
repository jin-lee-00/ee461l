import React, {useState, useEffect} from 'react'
import { IconContext } from 'react-icons/lib';
import { animateScroll } from 'react-scroll';
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from './Navbar.style'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    animateScroll.scrollToTop();
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#ffffff'}}>
        <Nav scrollNav={scrollNav}>
          <NavLink to='home' onClick={toggleHome} offset={-80}>
            <h1>HaaS</h1>
          </NavLink>
          <Bars onClick={toggle}/>
          <NavMenu>
            <NavLink to="projects" 
              smooth={true}
              duration ={500}
              spy={true} 
              exact='true'
              offset={-80}
            >
              Projects
            </NavLink>
            <NavLink to="resources" 
              smooth={true}
              duration ={500}
              spy={true} 
              exact='true'
              offset={-80}
            >
              Resources
            </NavLink>
            <NavLink to="datasets" 
              smooth={true}
              duration ={500}
              spy={true} 
              exact='true'
              offset={-80}
            >
              Datasets
            </NavLink>
            
            <NavLink to="about" 
              smooth={true}
              duration ={500}
              spy={true} 
              exact='true'
              offset={-80}
            >
              About
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar 