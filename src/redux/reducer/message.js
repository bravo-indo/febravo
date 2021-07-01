const initialState = {
  messageRegister: '',
  loading: false,
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
    case 'SET_CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    default:
      return {
        ...state,
      };
  }
};
export default message;
