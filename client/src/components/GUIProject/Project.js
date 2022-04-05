import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { 
  EntryHeader, 
  EntryText, 
  EntryWrapper, 
  GUIButton
} from './GUI.style'

const Project = ({ project, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <h3>{project.name}</h3>
        <GUIButton primary='true'
          onClick={() => onManage(project._id)}
        >
          Manage
        </GUIButton>
        <FaTimes 
          onClick={() => onDelete(project._id)}
        />
      </EntryHeader>
      <EntryText>
        {project._id}
      </EntryText>
    </EntryWrapper>
  )
}

export default Project