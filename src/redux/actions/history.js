/*eslint-disable*/
import http from '../../helpers/http';
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getHistory = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/user/notifikasi`);
    console.log(data.results);
    dispatch({
      type: "GET_HISTORY",
      payload: data.results,
    });
  };
}