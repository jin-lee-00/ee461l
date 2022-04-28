import React from 'react'
import Dataset from './Dataset'
import { ScrollBody } from './GUI.style'

const Datasets = ({ datasets, onDownload, onDelete }) => {
  return (
    <ScrollBody>
      {datasets.map((dataset, index) => (
        <Dataset key={index} dataset={dataset} 
          onDownload={onDownload}
          onDelete={onDelete}
        />
      ))}
    </ScrollBody>
  )
}

export default Datasets