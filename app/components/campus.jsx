import React, { Component } from 'react'
import Students from './Students'

const Campus = (props) => {
  const selectedCampus = props.selectedCampus;
  console.log('PROPS', props)

  return (
    <div>
      <h1>{selectedCampus.name}</h1>
        <Students students={props.students} campuses={props.campuses} selectedStudent={props.selectedStudent} />
    </div>
  )
}

export default Campus;