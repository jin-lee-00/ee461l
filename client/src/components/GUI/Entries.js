import React, { useState } from 'react'
import Entry from './Entry'

const Entries = ({ entries, onManage, onDelete }) => {
  return (
    <>
      {entries.map((entry, index) => (
        <Entry key={index} entry={entry} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Entries