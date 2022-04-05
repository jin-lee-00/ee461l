import React from 'react'
import Resource from './Resource'

const Resources = ({ resources, onManage, onDelete }) => {
  return (
    <>
      {resources.map((resource, index) => (
        <Resource key={index} resource={resource} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default Resources