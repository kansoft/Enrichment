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

/* ------------         REDUCER         ------------------ */

export default function campusesReducer(state = [], action) {

  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
}
