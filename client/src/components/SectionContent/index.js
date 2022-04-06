import React from 'react';
import { BtnLink } from '../Button.style';
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
import GUI from '../GUI'
import GUIProject from '../GUIProject';
import GUIResource from '../GUIResource';

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
  primary,
  route
}) => {

  const renderGUI = ({id}) => {
    switch(id) {
      case "projects":
        return <GUIProject />;
      case "resources":
        return <GUIResource />;
      default:
        return "";
    }
  }


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
                  <BtnLink to={route}
                    primary={primary}
                    lightBg={lightBg}
                  >
                    {buttonLabel}
                  </BtnLink>
                </BtnWrap>
              </TextWrapper>

            </Column1>
            <Column2>
              <ImgWrap>
                {renderGUI({id})}
              </ImgWrap>
             </Column2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  )
}

export default SectionContent