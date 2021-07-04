const initialState = {
  data: [],
  user: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_USER_PROFILE':
      return {
        ...state,
        data: action.payload,
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
