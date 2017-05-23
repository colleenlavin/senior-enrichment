import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../constants';

const initialCampusState = {
	selected: {},
	filteredStudents: [],
	list: []
}

export default function (state = initialStudentState, action) {
	const newState = Object.assign({}, state)

	switch (action.type) {
		
		case RECEIVE_STUDENTS:
			newState.list = action.students;
			break;

		case RECEIVE_STUDENT:
			newState.selected = action.student;

			break;

		default:
			newState;
			break;

	}

	return newState;
}