import React, { useState } from 'react'
import Entry from './Entry'

const Entries = ({ entries, onManage, onDelete }) => {
  return (
    <>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Entries