import {DataFetchUser, DataFetchColor} from '../../api/types';

export type RootState = {
  usersList: Array<DataFetchUser>;
  unknownList: Array<DataFetchColor>;
  pageUsersList: number;
  pageUnknownList: number;
  isEndUsersList: boolean;
  isEndUnknownList: boolean;
  fieldsUsers: Array<keyof DataFetchUser>;
  fieldsUnknown: Array<keyof DataFetchColor>;
};
