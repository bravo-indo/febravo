/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// /*eslint-disable*/
// import Swal from 'sweetalert2';
import http from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getUserWorker = (token) => async (dispatch) => {
  const { data } = await http(token).get(`${URL}/home`);
  dispatch({
    type: 'SET_GET_USER_PROFILE',
    payload: data.succsess,
  });
};
