import React, { useState } from 'react'
import { EntryForm, FormBtn, FormContainer, FormInput, FormLabel, GUIButton } from './GUI.style'

const AddDataset = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [page_url, setPage_url] = useState('')
  const [zip_url, setZip_url] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      alert('Please name the entry')
      return
    }

    onAdd({name, page_url, zip_url})
    
    setName('')
    setPage_url('')
    setZip_url('')
  }

  return (
    <EntryForm onSubmit={onSubmit}>
      <FormContainer>
        <FormLabel>Name</FormLabel>
        <FormInput 
          type='text' 
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Page URL</FormLabel>
        <FormInput 
          type='text' 
          placeholder='Page URL (https://)' 
          value={page_url}
          onChange={(e) => setPage_url(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Zip URL</FormLabel>
        <FormInput 
          type='text' 
          placeholder='ZIP URL (https://)' 
          value={zip_url}
          onChange={(e) => setZip_url(e.target.value)}
        />
      </FormContainer>

      <FormBtn type='submit' value='Save Entry' />
    </EntryForm>
  )
}

export default AddDataset