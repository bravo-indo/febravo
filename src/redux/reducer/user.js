const initialState = {
  data: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_USER_PROFILE':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default user;
