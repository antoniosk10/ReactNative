import {ACTION_TYPE} from '../../constants/constants';
import {put, takeEvery, call, all} from 'redux-saga/effects';
import {
  putUsers,
  putUnknown,
  endPageUsers,
  endPageUnknown,
} from '../actions/actions';
import {fetchDataUsers, fetchDataUnknown} from '../../api/FetchData';
import {DataAPI} from '../../api/types';
import {DataFetchUser, DataFetchColor} from '../../api/types';

export function* workerUsers(): Generator<any, void, any> {
  const wholeData = yield call(fetchDataUsers);
  const data: DataAPI = wholeData.data;
  yield put(putUsers(data.data as Array<DataFetchUser>));
  if (data.page === data.total_pages) {
    yield put(endPageUsers());
  }
}

export function* workerUnknown(): Generator<any, void, any> {
  const wholeData = yield call(fetchDataUnknown);
  const data: DataAPI = wholeData.data;
  yield put(putUnknown(data.data as Array<DataFetchColor>));
  if (data.page === data.total_pages) {
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
