const initialState = {
  data: {},
  porto: {},
  portoId: {},
  dataUser: {},
  addPorto: {},
  experience: {},
  experienceId: {},
  addExperience: {},
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GET_DETAIL_PROFILE':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_GET_DETAIL_USER':
      return {
        ...state,
        dataUser: action.payload,
      };
    case 'SET_UPDATE_PROFILE_RECRUITER':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_UPDATE_PROFILE':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_GET_PORTO':
      return {
        ...state,
        porto: action.payload,
      };
    case 'SET_GET_EXPERIENCE':
      return {
        ...state,
        experience: action.payload,
      };
    case 'SET_GET_PORTO_ID':
      return {
        ...state,
        portoId: action.payload,
      };
    case 'SET_GET_EXPERIENCE_ID':
      return {
        ...state,
        experienceId: action.payload,
      };
    case 'SET_ADD_PORTO':
      return {
        ...state,
        addPorto: action.payload,
      };
    case 'SET_ADD_EXPERIENCE':
      return {
        ...state,
        addExperience: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default profile;
