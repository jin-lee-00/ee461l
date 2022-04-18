import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  CardsContainer,
  CardsH1,
  CardsWrapper,
  Card,
  CardsIcon,
  CardsH2,
  CardsP
} from './SectionCards.style'

const SectionCards = () => {
  return (
    <CardsContainer id='about'>
      <CardsH1>Cards</CardsH1>
      <CardsWrapper>
        <Card>
          <CardsIcon src={Icon1}/>
          <CardsH2>Header 1</CardsH2>
          <CardsP>Paragraph 1</CardsP>
        </Card>
        <Card>
          <CardsIcon src={Icon2}/>
          <CardsH2>Header 2</CardsH2>
          <CardsP>Paragraph 2</CardsP>
        </Card>
        <Card>
          <CardsIcon src={Icon3}/>
          <CardsH2>Header 3</CardsH2>
          <CardsP>Paragraph 3</CardsP>
        </Card>
      </CardsWrapper>
    </CardsContainer>
  )
}

export default SectionCards