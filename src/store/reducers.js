import { handleActions } from 'redux-actions';
import * as ACTION from './action-types'

const initialState = {
  name: '',
  age: 0,
  isStudent: false
};

const onNameChanged = (state, { payload }) => ({
  ...state,
  name: payload
});

const onAgeChanged = (state, { payload }) => ({
  ...state,
  age: payload
});

const onIsStudentChanged = state => ({
  ...state,
  isStudent: !state.isStudent
});

export default handleActions({
  [ACTION.CHANGE_NAME]: onNameChanged,
  [ACTION.CHANGE_AGE]: onAgeChanged,
  [ACTION.CHANGE_STATUS]: onIsStudentChanged,
}, initialState);