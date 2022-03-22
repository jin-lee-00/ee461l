import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BtnLink } from '../Button.style'
import { 
  EntryHeader, 
  EntryText, 
  EntryWrapper, 
  GUIButton
} from './GUI.style'

const Entry = ({ entry, onManage, onDelete }) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <h3>{entry.name}</h3>
        <GUIButton primary='true'
          onClick={() => onManage(entry.name)}
        >
          Manage
        </GUIButton>
        <FaTimes 
          onClick={() => onDelete(entry.id)}
        />
      </EntryHeader>
      <EntryText>
        {entry.description}
      </EntryText>
    </EntryWrapper>
  )
}

export default Entry