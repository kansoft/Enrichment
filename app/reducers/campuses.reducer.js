/* -----------------    ACTION TYPES    ------------------ */
const SET_CAMPUSES = 'SET_CAMPUSES';

/* ------------    ACTION CREATORS      ------------------ */
const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });

/* ------------       THUNK CREATORS     ------------------ */

export const fetchCampuses = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/campuses');
    const action = setCampuses(data);
    dispatch(action);
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

    default:
      return state;
  }
}
