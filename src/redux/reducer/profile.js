const initialState = {
  data: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_DETAIL_PROFILE':
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

export default profile;
