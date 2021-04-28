const reducer = (state, action) => {
  switch (action.type) {
    case 'update/users':
      return {
        ...state,
        UsersList: [...state.UsersList, ...action.payload],
      };
    case 'update/unknown':
      return {
        ...state,
        UnknownList: [...state.UnknownList, ...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
