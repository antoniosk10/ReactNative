import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
const sagaMiddleware = createSagaMiddleware();

const initialStore = {
  usersList: [],
  unknownList: [],
  pageUsersList: 1,
  pageUnknownList: 1,
  isEndUsersList: false,
  isEndUnknownList: false,
  fieldsUsers: ['first_name', 'last_name', 'email'],
  fieldsUnknown: ['color', 'name', 'pantone_value', 'year'],
};

let store = createStore(reducer, initialStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
