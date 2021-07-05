/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
// /*eslint-disable*/
// import Swal from 'sweetalert2';
import http from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getUserWorker = (token, url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http(token).get(`${URL}/home`);
      dispatch({
        type: 'SET_GET_USER_PROFILE',
        payload: { user: data.succsess, pagination: data.results },
      });
    };
  }
  return async (dispatch) => {
    const { data } = await http(token).get(url);
    dispatch({
      type: 'SET_GET_USER_PROFILE',
      payload: { user: data.succsess, pagination: data.results },
    });
  };
};

export const addUser = (data) => ({
  type: 'SET_ADD_USER',
  payload: data,
});
