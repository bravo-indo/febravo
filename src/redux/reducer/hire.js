const initialState = {
  data:{}
}

const hire = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_HIRE" :{
      return {
        ...state,
        data : action.payload
      }
    }
    default :{
      return {
        ...state
      }
    }
  }
}

export default hire