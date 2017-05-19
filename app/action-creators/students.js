import {RECEIVE_STUDENTS, RECEIVE_STUDENT, GET_STUDENT, GET_STUDENTS} from '../constants';
import axios from 'axios';

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = (student, campus) => ({
  type: RECEIVE_STUDENT,
  student,
  campus

});

export const getStudentById = studentId => {
  return dispatch => {
    Promise
      .all([
        axios.get(`/api/students/${studentId}`),
      ])
      .then(results => results.map(r => r.data))
      .then(results => {
        dispatch(receiveStudent(...results));
      });
  };
};
