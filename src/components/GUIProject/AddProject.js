import React, { useState } from 'react'
import { 
  EntryForm, 
  FormBtn, 
  FormContainer, 
  FormInput, 
  FormLabel 
} from './GUI.style'

const AddProject = ({ onAdd }) => {
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
        <FormLabel>Name</FormLabel>
        <FormInput required
          type='text' 
          placeholder='Project Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Description</FormLabel>
        <FormInput required
          type='text' 
          placeholder='Description' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormContainer>

      <FormBtn type='submit' value='Create Project' />
    </EntryForm>
  )
}

export default AddProject