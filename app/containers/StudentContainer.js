import Student from '../components/Student';
// import { toggleSong } from '../action-creators/player';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedStudent: state.students.selected,
    selectedCampus: state.students.campus,
    children: ownProps.children
  };
};

const StudentContainer = connect(
  mapStateToProps
)(Student);

export default StudentContainer;