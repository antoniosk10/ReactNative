import {SettingsDefault} from './types';

export enum ACTION_TYPE {
  UPDATE_USERS = 'UPDATE_USERS',
  UPDATE_UNKNOWN = 'UPDATE_UNKNOWN',
  LOAD_USERS = 'LOAD_USERS',
  LOAD_UNKNOWN = 'LOAD_UNKNOWN',
  NEXT_PAGE_USERS = 'NEXT_PAGE_USERS',
  NEXT_PAGE_UNKNOWN = 'NEXT_PAGE_UNKNOWN',
  END_PAGE_USERS = 'END_PAGE_USERS',
  END_PAGE_UNKNOWN = 'END_PAGE_UNKNOWN',
  DELETE_ITEM = 'DELETE_ITEM',
  EDIT_ITEM = 'EDIT_ITEM',
  ADD_ITEM = 'ADD_ITEM',
}

export const DEFAULT_MODAL_SETTINGS: SettingsDefault = {
  visible: false,
  item: null,
  typeList: null,
  fields: [],
};
