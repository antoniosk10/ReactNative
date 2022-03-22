import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  END_PAGE_UNKNOWN,
  END_PAGE_USERS,
  NEXT_PAGE_UNKNOWN,
  NEXT_PAGE_USERS,
  UPDATE_UNKNOWN,
  UPDATE_USERS,
} from '../../constants/constants';
import {Action} from '../actions/types';
import {RootState} from '../store/types';
import {getNewColor, getNewUser} from './utils';

const reducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        usersList: [...state.usersList, ...action.payload],
      };
    case END_PAGE_USERS:
      return {
        ...state,
        isEndUsersList: true,
      };
    case UPDATE_UNKNOWN:
      return {
        ...state,
        unknownList: [...state.unknownList, ...action.payload],
      };
    case END_PAGE_UNKNOWN:
      return {
        ...state,
        isEndUnknownList: true,
      };
    case NEXT_PAGE_USERS:
      return {
        ...state,
        pageUsersList: state.pageUsersList + 1,
      };
    case NEXT_PAGE_UNKNOWN:
      return {
        ...state,
        pageUnknownList: state.pageUnknownList + 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        [action.payload.typeList]: state[action.payload.typeList].filter(
          el => el.id !== action.payload.id,
        ),
      };
    case EDIT_ITEM:
      return {
        ...state,
        [action.payload.typeList]: state[action.payload.typeList].map(el => {
          if (el.id === action.payload.id) {
            if (action.payload.typeList === 'usersList') {
              return {
                id: el.id,
                avatar: action.payload.data.avatar,
                first_name: action.payload.data.first_name,
                last_name: action.payload.data.last_name,
                email: action.payload.data.email,
              };
            } else {
              return {
                id: el.id,
                color: action.payload.data.color,
                name: action.payload.data.name,
                pantone_value: action.payload.data.pantone_value,
                year: action.payload.data.year,
              };
            }
          }
          return el;
        }),
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.typeList]: [
          ...state[action.payload.typeList],
          action.payload.typeList === 'usersList'
            ? getNewUser(state, action)
            : getNewColor(state, action),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
