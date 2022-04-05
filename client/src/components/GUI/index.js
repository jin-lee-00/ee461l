import React, { useState, useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
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
import AddEntry from "./AddEntry";

const GUI = ({ sectionName, unit }) => {
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries()
      setEntries(entriesFromServer)
      console.log(entries)
    }
    
    getEntries()
  }, [])

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:5000/project/getall")
    const data = await res.json()
    console.log(data)
    return data
  }

  const onClick =() => {
    setShowAddEntry(!showAddEntry)
  }

  const manageEntry = (name) => {
    alert("manage entry " + name)
  }

  const deleteEntry = (_id) => {
    console.log("test" + _id)
    fetch("http://localhost:5000/project/delete", {
      method: "POST",
      body: JSON.stringify({
        _id: _id
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setEntries(entries.filter((entry) => entry._id !== _id))
    })
  }


  const addEntry = (entry) => {
    const _id = Math.floor(Math.random() * 1000000) + 1
    const newEntry = { _id, ...entry}
    fetch("http://localhost:5000/project/add", {
      method: "POST",
      body: JSON.stringify({
        _id: newEntry._id,
        name: newEntry.name,
        desc: newEntry.description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    setEntries([...entries, newEntry])
  }

  return (
    <GUIContainer primary='true'>
      <Header>
        
        <TopLine>{sectionName}</TopLine>
        <GUIButton 
          onClick={onClick}
          primary={showAddEntry}
        >
          {showAddEntry ? '-' : '+'}
        </GUIButton>
      </Header>
      {showAddEntry && <AddEntry onAdd={addEntry}/>}
      {entries.length > 0 ? <Entries entries={entries} 
        onManage={manageEntry}
        onDelete={deleteEntry}
      /> : 'No Entries'}
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