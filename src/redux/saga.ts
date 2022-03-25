import {ACTION_TYPE} from '../constants/constants';
import {put, takeEvery, call, all} from 'redux-saga/effects';
import {
  putUsers,
  putUnknown,
  endPageUsers,
  endPageUnknown,
} from './actions/actions';
import {fetchDataUsers, fetchDataUnknown} from './../api/FetchData';

export function* workerUsers() {
  const data = yield call(fetchDataUsers);
  yield put(putUsers(data.data.data));
  if (data.data.page === data.data.total_pages) {
    yield put(endPageUsers());
  }
}

export function* workerUnknown() {
  const data = yield call(fetchDataUnknown);
  console.log(data);
  yield put(putUnknown(data.data.data));
  if (data.data.page === data.data.total_pages) {
    yield put(endPageUnknown());
  }
}

export function* watcherUsers() {
  yield takeEvery(ACTION_TYPE.LOAD_USERS, workerUsers);
}

export function* watcherUnknown() {
  yield takeEvery(ACTION_TYPE.LOAD_UNKNOWN, workerUnknown);
}

export default function* rootSaga() {
  yield all([watcherUsers(), watcherUnknown()]);
}
