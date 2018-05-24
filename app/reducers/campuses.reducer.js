/* -----------------    ACTION TYPES    ------------------ */
const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';

/* ------------    ACTION CREATORS      ------------------ */
const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });
const create = campus => ({ type: CREATE, campus });

/* ------------       THUNK CREATORS     ------------------ */

export const fetchCampuses = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/campuses');
    const action = setCampuses(data);
    try {
      dispatch(action);
    } catch (err) {
      console.error(`Fetching story unsuccessful`, err);
    }
  };
};

export const addCampus = campus => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.post('/api/campuses', campus);
    try {
      dispatch(create(data));
    } catch (err) {
      console.error(`Creating story : ${data} unsuccessful`, err);
    }
  };
};

/* ------------         Initial State         ------------------ */
const initialState = {
  list: [],
  isFetching: false,
};

/* ------------         REDUCER         ------------------ */

export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return { list: action.campuses, isFetching: false };
    case CREATE:
      return { list: [...state.list, action.campus], isFetching: false };

    default:
      return state;
  }
}
