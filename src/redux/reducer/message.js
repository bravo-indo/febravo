const initialState = {
  messageRegister: '',
  loading: false,
  toLogin: '',
  forgotPass: '',
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_REGISTER_SUCCESS':
      return {
        ...state,
        messageRegister: action.payload,
      };
    case 'SET_AUTH_REGISTER_FAILED':
      return {
        ...state,
        messageRegister: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_TO_LOGIN':
      return {
        ...state,
        toLogin: action.payload,
      };
    case 'SET_CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    case 'FORGOT_PASSWORD_FAILED': {
      return {
        ...state,
        forgotPass: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default message;
