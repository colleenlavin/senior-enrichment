import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedCampus: state.campuses.selected
  };
};

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;