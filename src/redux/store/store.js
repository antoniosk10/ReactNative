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
};

let store = createStore(reducer, initialStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
