import {RECEIVE_CAMPUSES, RECEIVE_CAMPUS, GET_CAMPUS, GET_CAMPUSES} from '../constants';
import axios from 'axios';

export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses
});

export const receiveStudent = (campus, student) => ({
  type: RECEIVE_STUDENT,
  campus,
  student

});

export const getCampusById = campusId => {
  return dispatch => {
    Promise
      .all([
        axios.get(`/api/campuses/${campusId}`),
      ])
      .then(results => results.map(r => r.data))
      .then(results => {
        dispatch(receiveCampus(...results));
      });
  };
};
