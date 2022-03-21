import React, { useState } from 'react'
import Entry from './Entry'

const Entries = ({ entries }) => {
  return (
    <>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </>
  )
}

export default Entries