/* -----------------    ACTION TYPES    ------------------ */
const SET_CAMPUSES = 'SET_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';
export const REMOVE = 'REMOVE_CAMPUS';

/* ------------    ACTION CREATORS      ------------------ */
const setCampuses = campuses => ({ type: SET_CAMPUSES, campuses });
const create = campus => ({ type: CREATE, campus });
const update = campus => ({ type: UPDATE, campus });
const remove = id => ({ type: REMOVE, id });

/* ------------         Initial State         ------------------ */
const initialState = {
  list: [],
  isFetching: false,
};

/* ------------         REDUCER         ------------------ */

export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return { list: action.campuses, isFetching: true };

    case CREATE:
      return { list: [...state.list, action.campus], isFetching: true };

    case REMOVE:
      return {
        list: state.list.filter(campus => campus.id !== action.id),
        isFetching: true,
      };

    default:
      return state;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchCampuses = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/campuses');
    const action = setCampuses(data);
    try {
      dispatch(action);
    } catch (err) {
      console.error(`Fetching campus unsuccessful`, err);
    }
  };
};

export const addCampus = campus => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.post('/api/campuses', campus);
    try {
      dispatch(create(data));
    } catch (err) {
      console.error(`Creating campus : ${data} unsuccessful`, err);
    }
  };
};
