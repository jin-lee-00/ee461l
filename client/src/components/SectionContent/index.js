import React from 'react';
import { BtnScroll, BtnLink } from '../Button.style';
import { 
  ContentContainer, 
  ContentWrapper, 
  ContentRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap, 
  ImgWrap,
  Img
} from './SectionContent.style'
import 
  GUI
 from '../GUI'
const SectionContent = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText,
  headline, 
  darkText, 
  description, 
  buttonLabel, 
  img, 
  alt,
  primary,
  dark,
  dark2,
  route
}) => {
  return (
    <>
      <ContentContainer lightBg={lightBg} id={id}>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                
                
                <BtnWrap>
                  <BtnLink to={route}>
                    {buttonLabel}
                  </BtnLink>
                </BtnWrap>
              </TextWrapper>

            </Column1>
            <Column2>
              <ImgWrap>
                <GUI sectionName={id}></GUI>
              </ImgWrap>
             </Column2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  )
}

export default SectionContent