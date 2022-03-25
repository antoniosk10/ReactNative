import {ACTION_TYPE} from '../../constants/constants';
import {
  Action,
  PayloadDeleteItem,
  PayloadEditItem,
  PayloadNewItem,
} from '../actions/types';
import {RootState} from '../store/types';
import {getNewColor, getNewUser} from './utils';
import {DataFetchUser, DataFetchColor} from './../../api/types';

const reducer = (state: RootState, action: Action): RootState => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_USERS: {
      return {
        ...state,
        usersList: [...state.usersList, ...(action.payload as DataFetchUser[])],
      };
    }
    case ACTION_TYPE.END_PAGE_USERS:
      return {
        ...state,
        isEndUsersList: true,
      };
    case ACTION_TYPE.UPDATE_UNKNOWN: {
      return {
        ...state,
        unknownList: [
          ...state.unknownList,
          ...(action.payload as DataFetchColor[]),
        ],
      };
    }
    case ACTION_TYPE.END_PAGE_UNKNOWN:
      return {
        ...state,
        isEndUnknownList: true,
      };
    case ACTION_TYPE.NEXT_PAGE_USERS:
      return {
        ...state,
        pageUsersList: state.pageUsersList + 1,
      };
    case ACTION_TYPE.NEXT_PAGE_UNKNOWN:
      return {
        ...state,
        pageUnknownList: state.pageUnknownList + 1,
      };
    case ACTION_TYPE.DELETE_ITEM: {
      const payload: PayloadDeleteItem = action.payload as PayloadDeleteItem;
      const updatedList = (state[payload.typeList] as Array<
        DataFetchUser | DataFetchColor
      >).filter(
        (el: DataFetchUser | DataFetchColor): boolean => el.id !== payload.id,
      );
      return {
        ...state,
        [payload.typeList]: updatedList,
      };
    }
    case ACTION_TYPE.EDIT_ITEM: {
      const payload: PayloadEditItem = action.payload as PayloadEditItem;
      const fetchData: DataFetchUser | DataFetchColor = payload.data;
      const isUserData = (
        data: DataFetchUser | DataFetchColor,
      ): data is DataFetchUser => {
        return (data as DataFetchUser).avatar !== undefined;
      };
      return {
        ...state,
        [payload.typeList]: state[payload.typeList].map(el => {
          if (el.id === payload.id) {
            if (isUserData(fetchData)) {
              return {
                id: el.id,
                avatar: fetchData.avatar,
                first_name: fetchData.first_name,
                last_name: fetchData.last_name,
                email: fetchData.email,
              };
            } else {
              return {
                id: el.id,
                color: fetchData.color,
                name: fetchData.name,
                pantone_value: fetchData.pantone_value,
                year: fetchData.year,
              };
            }
          }
          return el;
        }),
      };
    }
    case ACTION_TYPE.ADD_ITEM: {
      const payload: PayloadNewItem = action.payload as PayloadNewItem;
      return {
        ...state,
        [payload.typeList]: [
          ...state[payload.typeList],
          payload.typeList === 'usersList'
            ? getNewUser(state, action)
            : getNewColor(state, action),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;
