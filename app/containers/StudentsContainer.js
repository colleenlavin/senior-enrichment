import React, { Component } from 'react';
import { connect } from 'react-redux'

import Students from '../components/Students'
import { selectStudent, deleteAStudent } from '../action-creators/students'
import { getCampusById } from '../action-creators/campuses'
    
const mapStateToProps = (state) => {

  return {
    students: state.student.students,
    selectedStudent: state.studentData.selectedStudent,
    campuses: state.campusData.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStudent(student) {
      dispatch(selectStudent(student))
    },
    setCampus(campusId) {
      dispatch(getCampusById(campusId))
    },
    removeStudent(studentId) {
      dispatch(deleteAStudent(studentId))
    }
  }
}

const StudentsContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Students);

export default StudentsContainer