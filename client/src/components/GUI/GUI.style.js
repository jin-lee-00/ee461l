import styled from "styled-components";

export const GUIContainer = styled.div`
  width: 500px;
  height: 275px; 
  background-color: ${({primary}) => (primary ? '#9cadb7' : '#333f48')};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ContentRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';
`
export const Column1 = styled.div`
  margin-bottom: 0px;
  padding: 0 0 15px;
  grid-area: col1;
  display: flex;
  justify-content: center;
`

export const Column2 = styled.div`
  margin-bottom: 0px;
  padding: 0 0 15px;
  grid-area: col2;
  display: flex;
  justify-content: center;
`

export const TextWrapper = styled.div`
  margin: auto;
  text-align: center;
  max-width: 540px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`

export const TopLine = styled.p`
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 0px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({primary}) => (primary ? '#333f48' : '#ffffffs')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const GUIButton = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#333f48' : '#bf5700')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '5px 20px')};
  color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({primary}) => (primary ? '#bf5700' : '#ffffff')};
    color: #010606;
  }
`
export const EntryWrapper = styled.div`
  background: #f4f4f4;
  border-radius: 10px;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2 ease-in-out;
    transform: scale(1.02);
  }
`

export const EntryText = styled.h3`
  color: #000000;
`