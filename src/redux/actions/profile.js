/*eslint-disable*/
import http from '../../helpers/http';
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env;

const getProfileData = (token) => {
  return async (dispatch) => {
    console.log("token dispa: ", token);
    const { data } = await http(token).get(`${URL}/user/details`);
    console.log(data.results);
    dispatch({
      type: "SET_GET_DETAIL_PROFILE",
      payload: data.results,
    });
  };
};

export {getProfileData}
