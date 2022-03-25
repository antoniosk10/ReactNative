import {ACTION_TYPE} from '../../constants/constants';

export const putUsers = data => {
  return {
    type: ACTION_TYPE.UPDATE_USERS,
    payload: data,
  };
};

export const endPageUsers = () => {
  return {
    type: ACTION_TYPE.END_PAGE_USERS,
  };
};

export const loadUsers = () => {
  return {
    type: ACTION_TYPE.LOAD_USERS,
  };
};

export const nextPageUsers = () => {
  return {
    type: ACTION_TYPE.NEXT_PAGE_USERS,
  };
};

export const putUnknown = data => {
  return {
    type: ACTION_TYPE.UPDATE_UNKNOWN,
    payload: data,
  };
};

export const endPageUnknown = () => {
  return {
    type: ACTION_TYPE.END_PAGE_UNKNOWN,
  };
};

export const loadUnknown = () => {
  return {
    type: ACTION_TYPE.LOAD_UNKNOWN,
  };
};

export const nextPageUnknown = () => {
  return {
    type: ACTION_TYPE.NEXT_PAGE_UNKNOWN,
  };
};

export const deleteItem = (typeList, id) => {
  return {
    type: ACTION_TYPE.DELETE_ITEM,
    payload: {
      id,
      typeList,
    },
  };
};

export const editItem = (typeList, id, data) => {
  return {
    type: ACTION_TYPE.EDIT_ITEM,
    payload: {
      id,
      typeList,
      data,
    },
  };
};

export const addItem = (typeList, data) => {
  return {
    type: ACTION_TYPE.ADD_ITEM,
    payload: {
      typeList,
      data,
    },
  };
};
