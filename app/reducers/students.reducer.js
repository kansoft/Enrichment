/* -----------------    ACTION TYPES    ------------------ */
const SET_STUDENTS = 'SET_STUDENTS';
const CREATE = 'CREATE_STUDENT';

/* ------------    ACTION CREATORS      ------------------ */
const setStudents = students => ({ type: SET_STUDENTS, students });
const create = student => ({ type: CREATE, student });

/* ------------       THUNK CREATORS     ------------------ */

export const fetchStudents = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/students');
    const action = setStudents(data);
    try {
      dispatch(action);
    } catch (err) {
      console.error(`Fetching student unsuccessful`, err);
    }
  };
};

export const addStudent = student => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.post('/api/students', student);
    try {
      dispatch(create(data));
    } catch (err) {
      console.error(`Creating student : ${data} unsuccessful`, err);
    }
  };
};

/* ------------         Initial State         ------------------ */
const initialState = {
  list: [],
  isFetching: false,
};

/* ------------         REDUCER         ------------------ */

export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return { list: action.students, isFetching: true };
    case CREATE:
      return { list: [...state.list.action.student], isFetching: true };
    default:
      return state;
  }
}
