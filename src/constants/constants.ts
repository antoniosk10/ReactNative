import {SettingsDefault} from './types';

export const UPDATE_USERS = 'UPDATE_USERS';
export const UPDATE_UNKNOWN = 'UPDATE_UNKNOWN';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_UNKNOWN = 'LOAD_UNKNOWN';
export const NEXT_PAGE_USERS = 'NEXT_PAGE_USERS';
export const NEXT_PAGE_UNKNOWN = 'NEXT_PAGE_UNKNOWN';
export const END_PAGE_USERS = 'END_PAGE_USERS';
export const END_PAGE_UNKNOWN = 'END_PAGE_UNKNOWN';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DEFAULT_MODAL_SETTINGS: SettingsDefault = {
  visible: false,
  item: null,
  typeList: null,
  fields: [],
};
