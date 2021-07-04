<<<<<<< HEAD
/*eslint-disable*/

const initialState = {
  data: {},
=======
const initialState = {
  hire: '',
>>>>>>> d7619cb57a2c8781de562db402aeb23bbff94e5b
};

const hire = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'ADD_HIRE': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
=======
    case 'SET_HIRE':
      return {
        ...state,
        hire: action.payload,
      };
    default:
      return {
        ...state,
      };
>>>>>>> d7619cb57a2c8781de562db402aeb23bbff94e5b
  }
};

export default hire;
