import {
  UPDATE_USERS,
  UPDATE_UNKNOWN,
  NEXT_PAGE_USERS,
  NEXT_PAGE_UNKNOWN,
} from './../../constants';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        usersList: [...state.usersList, ...action.payload],
      };
    case UPDATE_UNKNOWN:
      return {
        ...state,
        unknownList: [...state.unknownList, ...action.payload],
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
    default:
      return state;
  }
};

export default reducer;
