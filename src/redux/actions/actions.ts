import {ACTION_TYPE} from '../../constants/constants';
import {DataFetchUser, DataFetchColor} from '../../api/types';
import {PayloadNewItem, PayloadEditItem} from './types';

export const putUsers = (data: Array<DataFetchUser>) => {
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

export const putUnknown = (data: Array<DataFetchColor>) => {
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

export const deleteItem = (typeList: string, id: number) => {
  return {
    type: ACTION_TYPE.DELETE_ITEM,
    payload: {
      id,
      typeList,
    },
  };
};

export const editItem = (
  typeList: string | null,
  id: number,
  data: PayloadEditItem,
) => {
  return {
    type: ACTION_TYPE.EDIT_ITEM,
    payload: {
      id,
      typeList,
      data,
    },
  };
};

export const addItem = (typeList: string | null, data: PayloadNewItem) => {
  return {
    type: ACTION_TYPE.ADD_ITEM,
    payload: {
      typeList,
      data,
    },
  };
};
