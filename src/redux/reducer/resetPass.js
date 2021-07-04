const initialState = {
  resetPassword: false,
  email: '',
};

const resetPass = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESET_PASSWORD':
      return {
        ...state,
        resetPassword: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default resetPass;
