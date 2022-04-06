import {RootState} from '../store/types';
import {Action, PayloadNewItem} from './../actions/types';
import {DataFetchUser, DataFetchColor} from '../../api/types';

export const getNewUser = (state: RootState, action: Action): DataFetchUser => {
  const payload: PayloadNewItem = action.payload as PayloadNewItem;
  const data: DataFetchUser = payload.data as DataFetchUser;
  return {
    id: state.usersList[state.usersList.length - 1].id + 1,
    avatar: data.avatar,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
  };
};

export const getNewColor = (
  state: RootState,
  action: Action,
): DataFetchColor => {
  const payload: PayloadNewItem = action.payload as PayloadNewItem;
  const data: DataFetchColor = payload.data as DataFetchColor;
  return {
    id: state.unknownList[state.unknownList.length - 1].id + 1,
    color: data.color,
    name: data.name,
    pantone_value: data.pantone_value,
    year: data.year,
  };
};
