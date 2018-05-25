import React from 'react';
import { connect } from 'react-redux';

const StudentSelectForm = props => {
  const { handleChange, campus } = props;
  const students = props.students.list;
  return (
    <div className="formCampus" key={students.id}>
      <label>Students:</label>
      <br />
      <select onChange={handleChange} name="name">
        <option value="null">Select student...</option>
        {students.map(student => (
          <option value={student.id} key={student.id}>
            {student.firstName} {student.lastName}
          </option>
        ))}
      </select>
      <button className="smallbutton" type="submit">
        Add to Campus
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    students: state.students,
  };
};
const mapDispatch = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    updateStudent: student => dispatch(updateStudent(id, student, ownProps)),
  };
};

export default connect(mapState)(StudentSelectForm);
