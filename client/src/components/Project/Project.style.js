import styled from 'styled-components'
import { NavLink as LinkRoute } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rbga(10, 201, 122, 1) 100%
  );
`

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const NavLink = styled(LinkRoute)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #bf5700;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.div`
  background: #333f48;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`

export const H1 = styled.h1`
  margin-bottom: 0px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
export const H2 = styled.h2`
  margin-bottom: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 100;
  text-align: center;
`

export const P = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 1;
  font-style: italic;
  text-align: center;
`

export const Label = styled.label`
  margin-bottom: 8px;
  margin-right: 10px;
  font-size: 14px;
  color: #fff;
`

export const Input = styled.input`
  max-width: 100px;
  padding: 5px 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
`

export const Button = styled.button`
  background: #bf5700;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`