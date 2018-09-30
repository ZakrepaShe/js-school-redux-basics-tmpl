import { createAction } from 'redux-actions';
import * as ACTION from './action-types'

export const changeName = createAction(ACTION.CHANGE_NAME);
export const changeAge = createAction(ACTION.CHANGE_AGE);
export const changeStatus = createAction(ACTION.CHANGE_STATUS);
