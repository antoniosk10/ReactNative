import {createStore} from 'redux';
import reducer from '../reducers/reducer';

const initialStore = {
  UsersList: [],
  UnknownList: [],
};

let store = createStore(reducer, initialStore);

export default store;
