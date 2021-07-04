const initialState = {
  messageRegister: '',
  loading: false,
  toLogin: '',
  forgotPass: '',
  portofolio: '',
  experience: '',
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_REGISTER_SUCCESS':
      return {
        ...state,
        messageRegister: action.payload,
      };
    case 'SET_ADD_PORTO_SUCCESS':
      return {
        ...state,
        portofolio: action.payload,
      };
    case 'SET_ADD_EXPERIENCE_SUCCESS':
      return {
        ...state,
        experience: action.payload,
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
