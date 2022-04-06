import {DataFetchUser, DataFetchColor} from '../api/types';

export interface SettingsDefault {
  visible: boolean;
  item: null | DataFetchUser | DataFetchColor;
  typeList: null | string;
  fields: Array<keyof DataFetchUser | keyof DataFetchColor>;
}
