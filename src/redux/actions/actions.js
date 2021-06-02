import {
  LOAD_USERS,
  UPDATE_USERS,
  NEXT_PAGE_USERS,
  LOAD_UNKNOWN,
  UPDATE_UNKNOWN,
  NEXT_PAGE_UNKNOWN,
  END_PAGE_USERS,
  END_PAGE_UNKNOWN,
} from './../../constants';

export const putUsers = data => {
  return {
    type: UPDATE_USERS,
    payload: data,
  };
};

export const endPageUsers = () => {
  return {
    type: END_PAGE_USERS,
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

export const endPageUnknown = () => {
  return {
    type: END_PAGE_UNKNOWN,
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
