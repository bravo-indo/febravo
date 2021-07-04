const initialState = {
  skill: '',
};

const skill = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADD_SKILL':
      return {
        ...state,
        skill: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default skill;
