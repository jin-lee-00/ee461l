import React from 'react'
import { ScrollBody } from './GUI.style'
import Resource from './Resource'

const Resources = ({ resources, onManage, onDelete }) => {
  return (
    <ScrollBody>
      {resources.map((resource, index) => (
        <Resource key={index} resource={resource} 
          onManage={onManage}
          onDelete={onDelete}
        />
      ))}
    </ScrollBody>
  )
}

export default Resources