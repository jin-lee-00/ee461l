import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { 
  EntryHeader, 
  EntryText, 
  EntryWrapper, 
  GUIButton
} from './GUI.style'

const Resource = ({ resource, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <h3>{resource.name}</h3>
        <GUIButton primary='true'
          onClick={() => onManage(resource._id)}
        >
          Manage
        </GUIButton>
        <FaTimes 
          onClick={() => onDelete(resource._id)}
        />
      </EntryHeader>
      <EntryText>
        Capacity: {resource.capacity} 
      </EntryText>
      <EntryText>
        Availability: {resource.availability} 
      </EntryText>
    </EntryWrapper>
  )
}

export default Resource