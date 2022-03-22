import styled from 'styled-components'
import { NavLink as LinkRoute } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const BtnScroll = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#333f48' : '#bf5700')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary}) => (primary ? '#bf5700' : '#ffffff')};
    color: #010606;
  }
`

export const BtnLink = styled(LinkRoute)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#333f48' : '#bf5700')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary, lightBg}) => (primary ? '#bf5700' : (lightBg ? '#333f48' : '#ffffff'))};
    color: ${({primary, lightBg}) => (primary ? '#ffffff' : (lightBg ? '#ffffff' : '#000000'))};
  }
`