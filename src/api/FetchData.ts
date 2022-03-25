import axios from 'axios';
import store from './../redux/store/store';

export function fetchDataUsers(): Promise<any> {
  return axios(
    `https://reqres.in/api/users?page=${store.getState().pageUsersList}`,
  );
}

export function fetchDataUnknown(): Promise<any> {
  return axios(
    `https://reqres.in/api/unknown?page=${store.getState().pageUnknownList}`,
  );
}
