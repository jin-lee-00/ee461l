import React, { useState } from 'react'
import Dataset from './Dataset'

const Datasets = ({ datasets, onManage, onDelete }) => {
  return (
    <>
      {datasets.map((dataset, index) => (
        <Dataset key={index} dataset={dataset} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Datasets