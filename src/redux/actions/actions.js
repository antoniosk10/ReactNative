import {
  LOAD_USERS,
  UPDATE_USERS,
  NEXT_PAGE_USERS,
  LOAD_UNKNOWN,
  UPDATE_UNKNOWN,
  NEXT_PAGE_UNKNOWN,
} from './../../constants';

export const putUsers = data => {
  return {
    type: UPDATE_USERS,
    payload: data,
  };
};

export const loadUsers = () => {
  return {
    type: LOAD_USERS,
  };
};

export const nextPageUsers = () => {
  return {
    type: NEXT_PAGE_USERS,
  };
};

export const putUnknown = data => {
  return {
    type: UPDATE_UNKNOWN,
    payload: data,
  };
};

export const loadUnknown = () => {
  return {
    type: LOAD_UNKNOWN,
  };
};

export const nextPageUnknown = () => {
  return {
    type: NEXT_PAGE_UNKNOWN,
  };
};
