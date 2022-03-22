import {
  LOAD_USERS,
  UPDATE_USERS,
  NEXT_PAGE_USERS,
  LOAD_UNKNOWN,
  UPDATE_UNKNOWN,
  NEXT_PAGE_UNKNOWN,
  END_PAGE_USERS,
  END_PAGE_UNKNOWN,
  DELETE_ITEM,
  EDIT_ITEM,
  ADD_ITEM,
} from '../../constants/constants';

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

export const deleteItem = (typeList, id) => {
  return {
    type: DELETE_ITEM,
    payload: {
      id,
      typeList,
    },
  };
};

export const editItem = (typeList, id, data) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      typeList,
      data,
    },
  };
};

export const addItem = (typeList, data) => {
  return {
    type: ADD_ITEM,
    payload: {
      typeList,
      data,
    },
  };
};
