import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { 
  EntryHeader, 
  EntryText, 
  EntryWrapper, 
  EntryIconsWrapper,
  EntryIcon,
  GUIButton
} from './GUI.style'

const Project = ({ project, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <h3>{project.name} ({project._id})</h3>
        <EntryIconsWrapper>
          <EntryIcon>
            <GUIButton primary='true'
              onClick={() => onManage(project._id)}
            >
              Manage
            </GUIButton>
          </EntryIcon>
          <EntryIcon>
            <FaTimes 
              onClick={() => onDelete(project._id)}
            />
          </EntryIcon>
        </EntryIconsWrapper>
      </EntryHeader>
      <>
        {Object.entries(project.resources).map(([key, value]) =>(
          <EntryText key={key}>{key} : {value}</EntryText>
        ))}
      </>
    </EntryWrapper>
  )
}

export default Project