import axios from 'axios';
import store from './../redux/store/store';

export function fetchDataUsers() {
  return axios(
    `https://reqres.in/api/users?page=${store.getState().pageUsersList}`,
  );
}

export function fetchDataUnknown() {
  return axios(
    `https://reqres.in/api/unknown?page=${store.getState().pageUnknownList}`,
  );
}
