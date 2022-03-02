import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='home'>
          <h1>HaaS</h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to="projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="resources" activeStyle>
            Resources
          </NavLink>
          <NavLink to="datasets" activeStyle>
            Datasets
          </NavLink>
          <NavLink to="about" activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar