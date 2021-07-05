const initialState = {
  data: [],
  user: [],
  pagination: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_USER_PROFILE':
      return {
        ...state,
        data: action.payload.user,
        pagination: action.payload.pagination,
      };
    case 'SET_NEXT_USERS':
      return {
        ...state,
        data: [...state.data, ...action.payload.user],
        pageInfo: action.payload.pageInfo,
      };
    case 'SET_ADD_USER':
      return {
        ...state,
        user: [...state.user, ...[action.payload]],
      };
    case 'SET_CLEAR_USER':
      return {
        ...state,
        user: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
