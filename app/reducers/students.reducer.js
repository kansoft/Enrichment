/* -----------------    ACTION TYPES    ------------------ */
const SET_STUDENTS = 'SET_STUDENTS';

/* ------------    ACTION CREATORS      ------------------ */
const setStudents = students => ({ type: SET_STUDENTS, students });

/* ------------       THUNK CREATORS     ------------------ */

export const fetchStudents = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/students');
    const action = setStudents(data);
    dispatch(action);
  };
};

/* ------------         REDUCER         ------------------ */

export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;

    default:
      return state;
  }
}
