import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';

import Home from './components/home';
import Campus from './components/campus';
import Campuses from './components/campuses';
import Root from './components/Root';
import Student from './components/student';
import Students from './components/students';

import AppContainer from './containers/AppContainer';
import CampusContainer from './containers/CampusContainer';
import CampusesContainer from './containers/CampusesContainer';
import StudentContainer from './containers/StudentContainer';
import StudentsContainer from './containers/StudentsContainer';


import { receiveCampuses, recieveStudent, getCampusById } from './action-creators/campuses';
import { receiveArtists, getArtistById } from './action-creators/students';

const onAppEnter = () => {

    const pCampuses = axios.get('/campuses');
    const pStudents = axios.get('/students');


    return Promise
        .all([pCampuses, pStudents])
        .then(responses => responses.map(r => r.data))
        .then(([albums, artists, playlists]) => {
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


export default function Root() {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Home} onEnter={onAppEnter}>
                    <Route path="/campuses" component={CampusesContainer} />
                    <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter} />
                    <Route path="/students" component={StudentsContainer} />
                    <Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter}>
                    </Route>
                    <IndexRedirect to="/" />
                </Route>
            </Router>
        </Provider>
    );
}