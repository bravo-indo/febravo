const initialState = {
  isRegister: false,
  token: null,
  message: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_REGISTER':
      return {
        ...state,
        isRegister: !state.isRegister,
      };
    case 'AUTH_LOGIN':
      return {
        ...state,
        token: action.payload,
      };
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default auth;
