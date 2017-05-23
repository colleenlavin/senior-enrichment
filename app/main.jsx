'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import store from './store'
import Home from './components/home'
import Root from './components/Root'
import App from './containers/CampusesContainer'
import CampusesContainer from './containers/CampusesContainer'
import CampusContainer from './containers/CampusContainer'
import StudentContainer from './containers/StudentContainer'
import StudentsContainer from './containers/StudentsContainer'

const onAppEnter = () => {

  const pCampuses = axios.get('/api/campuses');
  const pStudents = axios.get('/api/students');

  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    });
};

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
};

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudentById(studentId));
};

export default function Main() {
  return (
    <Provider store={store}>

      <Route path='/' component={Root} onEnter={onAppEnter} >
        <Route path='/campuses' component={CampusesContainer} />
        <Route path='/campuses/:campusId' component={CampusContainer} onEnter={onCampusEnter} />
        <Route path='/students' component={StudentsContainer} />
        <Route path='/students/:studentId' component={StudentContainer} onEnter={onStudentEnter} />
        <IndexRedirect to='/home' />
      </Route>

    </Provider> ,
    document.getElementById('main')
  )
}

