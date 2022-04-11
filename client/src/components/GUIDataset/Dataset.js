import React from 'react'
//import { FaTimes } from 'react-icons/fa'
import { 
  EntryHeader, 
  EntryH3,
  EntryHref,
  EntryText, 
  EntryWrapper, 
  GUIButton
} from './GUI.style'

const Dataset = ({ dataset, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <EntryH3>
          <EntryHref href={dataset.url} target="_blank">
            {dataset.name}
          </EntryHref>
        </EntryH3>
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
      </EntryText>
    </EntryWrapper>
  )
}

export default Dataset