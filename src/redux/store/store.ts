import {createStore, applyMiddleware, Reducer} from 'redux';
import reducer from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/saga';
import {RootState} from './types';
const sagaMiddleware = createSagaMiddleware();

const initialStore: RootState = {
  usersList: [],
  unknownList: [],
  pageUsersList: 1,
  pageUnknownList: 1,
  isEndUsersList: false,
  isEndUnknownList: false,
  fieldsUsers: ['avatar', 'first_name', 'last_name', 'email'],
  fieldsUnknown: ['color', 'name', 'pantone_value', 'year'],
};

const store = createStore(
  reducer as Reducer,
  initialStore,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
