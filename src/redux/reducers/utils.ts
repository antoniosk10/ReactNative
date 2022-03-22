import {RootState} from '../store/types';
import {ActionAddUser, ActionAddColor} from './../actions/types';

export const getNewUser = (state: RootState, action: ActionAddUser) => ({
  id: state.usersList[state.usersList.length - 1].id + 1,
  avatar: action.payload.data.avatar,
  first_name: action.payload.data.first_name,
  last_name: action.payload.data.last_name,
  email: action.payload.data.email,
});

export const getNewColor = (state: RootState, action: ActionAddColor) => ({
  id: state.unknownList[state.unknownList.length - 1].id + 1,
  color: action.payload.data.color,
  name: action.payload.data.name,
  pantone_value: action.payload.data.pantone_value,
  year: action.payload.data.year,
});
