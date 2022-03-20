import React from "react";
import {
  GUIContainer,
  TextWrapper,
  TopLine,
  Heading,
  ContentRow,
  Column1,
  Column2,
  GUIButton
} from './GUI.style';

const GUI = ({ sectionName }) => {
  return (
    <GUIContainer primary='true'>
      <h1>{sectionName}</h1>
    </GUIContainer>
  )
}

export default GUI

/*
export class GUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      primary: true
    };
  }

  render() {
    return (
      <GUIContainer primary={this.state.primary}>
        <TextWrapper>
          <TopLine>Mock {this.props.topline} Display </TopLine>
          <Heading primary={this.state.primary}
            onClick={() =>
              this.setState({ primary: !this.state.primary})}
          >
            {this.state.count}
          </Heading>
        </TextWrapper>
        <ContentRow>
          <Column1>
            <GUIButton onClick={() =>
              this.setState({ count: this.state.count + 1})}
            >
              +
            </GUIButton>
          </Column1>
          <Column2>
            <GUIButton onClick={() =>
              this.setState({ count: this.state.count - 1})}
            >
              -
            </GUIButton>
          </Column2>
        </ContentRow>
      </GUIContainer>
    );
  }
}
*/