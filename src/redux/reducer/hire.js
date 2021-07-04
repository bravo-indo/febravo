const initialState = {
  hire: '',
};

const hire = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HIRE':
      return {
        ...state,
        hire: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default hire;
