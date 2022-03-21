import React, {useState} from "react";
import Entries from "./Entries";
import {
  GUIContainer,
  Header,
  TextWrapper,
  TopLine,
  Heading,
  ContentRow,
  Column1,
  Column2,
  GUIButton
} from './GUI.style';

const GUI = ({ sectionName, unit }) => {
  const [entries, setEntries] = useState([
    { 
      id: 1,
      text: 'entry 1'
    },
    {
      id: 2,
      text: 'entry 2'
    },
    {
      id: 3,
      text: 'entry 3'
    },
  ])

  const onClick =() => {
    alert(unit)
  }
  return (
    <GUIContainer primary='true'>
      <Header>
        <TopLine>{sectionName}</TopLine>
        <GUIButton 
          onClick={onClick}
        >
          +
        </GUIButton>
      </Header>
      <Entries entries={entries}></Entries>
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