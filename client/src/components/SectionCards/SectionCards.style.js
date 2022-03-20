import styled from "styled-components";

export const CardsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #bf5700;

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`

export const CardsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const Card = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const CardsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const CardsH1 = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const CardsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const CardsP = styled.p`
  font-size: 1rem;
  text-align: center;
`