const initialState = {
  messageRegister: '',
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
