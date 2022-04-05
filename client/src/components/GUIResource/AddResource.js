import React, { useState } from 'react'
import { EntryForm, FormBtn, FormContainer, FormInput, FormLabel, GUIButton } from './GUI.style'

const AddResource = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      alert('Please name the resourrce')
      return
    }

    onAdd({name, description})
    
    setName('')
    setDescription('')
  }

  return (
    <EntryForm onSubmit={onSubmit}>
      <FormContainer>
        <FormLabel>Resources</FormLabel>
        <FormInput 
          type='text' 
          placeholder='Resource name'
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

      <FormBtn type='submit' value='Create Resource' />
    </EntryForm>
  )
}

export default AddResource