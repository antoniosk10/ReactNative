import {DataFetchUser, DataFetchColor} from './../../api/types';

interface PayloadNewUser {
  typeList: 'user';
  data: DataFetchUser;
  fields: Array<string>;
}

interface PayloadNewColor {
  typeList: 'color';
  data: DataFetchColor;
  fields: Array<string>;
}

export interface Action {
  type: string;
  payload: Array<DataFetchUser | DataFetchColor>;
}

export interface ActionUpdateItem {
  type: string;
  payload: PayloadNewUser | PayloadNewColor;
}

export interface ActionAddUser {
  payload: PayloadNewUser;
}

export interface ActionAddColor {
  payload: PayloadNewColor;
}
