import React from 'react'
import Dataset from './Dataset'

const Datasets = ({ datasets, onDownload, onDelete }) => {
  return (
    <>
      {datasets.map((dataset, index) => (
        <Dataset key={index} dataset={dataset} 
          onDownload={onDownload}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Datasets