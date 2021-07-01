const initialState = {
  isRegister: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_REGISTER':
      return {
        ...state,
        isRegister: !state.isRegister,
      };
    default:
      return {
        ...state,
      };
  }
};

export default auth;
