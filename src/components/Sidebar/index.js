import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SideBtnLink
} from './Sidebar.style';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>
            HaaS
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to='resources' onClick={toggle}>
            Resources
          </SidebarLink>
          <SidebarLink to='datasets' onClick={toggle}>
            Datasets
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle} offset={-80}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnLink to='/signin'>Sign In</SideBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar