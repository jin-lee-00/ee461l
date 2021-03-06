import React, { useState } from 'react'
import { EntryForm, FormBtn, FormContainer, FormInput, FormLabel } from './GUI.style'

const AddResource = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      alert('Please name the resource')
      return
    }

    onAdd({name, capacity})
    
    setName('')
    setCapacity('')
  }

  return (
    <EntryForm onSubmit={onSubmit}>
      <FormContainer>
        <FormLabel>Name</FormLabel>
        <FormInput required
          type='text' 
          placeholder='Resource name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Capacity</FormLabel>
        <FormInput required 
          type='number' 
          placeholder='Add capacity' 
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </FormContainer>

      <FormBtn type='submit' value='Create Resource' />
    </EntryForm>
  )
}

export default AddResource