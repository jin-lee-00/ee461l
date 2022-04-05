import React, { useState } from 'react'
import { EntryForm, FormBtn, FormContainer, FormInput, FormLabel, GUIButton } from './GUI.style'

const AddEntry = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      alert('Please name the entry')
      return
    }

    onAdd({name, description})
    
    setName('')
    setDescription('')
  }

  return (
    <EntryForm onSubmit={onSubmit}>
      <FormContainer>
        <FormLabel>Entry</FormLabel>
        <FormInput 
          type='text' 
          placeholder='Add Entry'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Description</FormLabel>
        <FormInput 
          type='text' 
          placeholder='Add Description' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormContainer>

      <FormBtn type='submit' value='Save Entry' />
    </EntryForm>
  )
}

export default AddEntry