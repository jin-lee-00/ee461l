import React, { useState, useEffect } from "react";
import Datasets from "./Datasets";
import {
  GUIContainer,
  Header,
  TopLine,
  GUIButton
} from './GUI.style';
import AddDataset from "./AddDataset";
import { useNavigate } from "react-router-dom";

const GUIDataset = () => {
  //const [showAddDataset, setShowAddDataset] = useState(false)
  const [datasets, setDatasets] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getDatasets = async () => {
      const datasetsFromServer = await fetchDatasets()
      setDatasets(datasetsFromServer)
      console.log(datasets)
    }
    
    getDatasets()
  }, [])

  const fetchDatasets = async () => {
    const res = await fetch("/dataset/getall")
    const data = await res.json()
    console.log(data)
    return data
  }

{/*
  const onClick =() => {
    setShowAddDataset(!showAddDataset)
  }
*/}

  const downloadDataset = (zip_url) => {
    window.open(zip_url, "_blank")
  }

  const deleteDataset = (_id) => {
    console.log("test" + _id)
    fetch("/project/delete", {
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
      setDatasets(datasets.filter((dataset) => dataset._id !== _id))
    })
  }

{/*
  const addDataset = (dataset) => {
    const _id = Math.floor(Math.random() * 10000) + 1
    const newDataset = { _id, ...dataset}
    fetch("http://localhost:5000/project/add", {
      method: "POST",
      body: JSON.stringify({
        _id: newDataset._id,
        name: newDataset.name,
        desc: newDataset.description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    setDatasets([...datasets, newDataset])
  }
*/}

  return (
    <GUIContainer primary='true'>
      <Header>
        
        <TopLine>Datasets</TopLine>
{/*
        <GUIButton 
          onClick={onClick}
          primary={showAddDataset}
        >
          {showAddDataset ? '-' : '+'}
        </GUIButton>
*/}      
      </Header>
      {/*showAddDataset && <AddDataset onAdd={addDataset}/>*/}
      {datasets.length > 0 ? <Datasets datasets={datasets} 
        onDownload={downloadDataset}
        onDelete={deleteDataset}
      /> : 'No Datasets'}
    </GUIContainer>
  )
}

export default GUIDataset