import {LOAD_USERS, LOAD_UNKNOWN} from './../constants';
import {put, takeEvery, call, all} from 'redux-saga/effects';
import axios from 'axios';
import {putUsers, putUnknown} from './actions/actions';
import store from './store/store';

function fetchDataUsers() {
  return axios(
    `https://reqres.in/api/users?page=${store.getState().pageUsersList}`,
  );
}

function fetchDataUnknown() {
  return axios(
    `https://reqres.in/api/unknown?page=${store.getState().pageUnknownList}`,
  );
}

export function* workerUsers() {
  const data = yield call(fetchDataUsers);
  yield put(putUsers(data.data.data));
}

export function* workerUnknown() {
  const data = yield call(fetchDataUnknown);
  yield put(putUnknown(data.data.data));
}

export function* watcherUsers() {
  yield takeEvery(LOAD_USERS, workerUsers);
}

export function* watcherUnknown() {
  yield takeEvery(LOAD_UNKNOWN, workerUnknown);
}

export default function* rootSaga() {
  yield all([watcherUsers(), watcherUnknown()]);
}
