import React from 'react'
//import { FaTimes } from 'react-icons/fa'
import { 
  EntryHeader, 
  EntryText, 
  EntryWrapper, 
  GUIButton
} from './GUI.style'

const Dataset = ({ dataset, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <h3>{dataset.name}</h3>
        <GUIButton primary='true'
          onClick={() => onManage(dataset._id)}
        >
          Download
        </GUIButton>
{/*
        <FaTimes 
          onClick={() => onDelete(dataset._id)}
        />
*/}   
      </EntryHeader>
      <EntryText>
        {dataset._id}
      </EntryText>
    </EntryWrapper>
  )
}

export default Dataset