import {DataFetchUser, DataFetchColor} from './../../api/types';

export interface PayloadNewItem {
  typeList: 'usersList' | 'unknownList';
  data: DataFetchUser | DataFetchColor;
  fields: Array<string>;
}

export interface PayloadDeleteItem {
  typeList: 'usersList' | 'unknownList';
  id: number;
}

export interface PayloadEditItem {
  typeList: 'usersList' | 'unknownList';
  id: number;
  data: DataFetchUser | DataFetchColor;
}

export type Action = {
  type: string;
  payload:
    | PayloadNewItem
    | PayloadDeleteItem
    | Array<DataFetchColor>
    | Array<DataFetchUser>;
};
