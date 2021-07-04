/*eslint-disable*/
import http from '../../helpers/http';
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const addSkill = (data, token) => {
  return async (dispatch) => {
    console.log('data profile porto',data, token)
    const form = new URLSearchParams();
    form.append("name", data);
    const { data: newData } = await http(token).post(
      `${URL}/user/details/editprofile`,
      form
    );
    dispatch({
      type: "SET_ADD_SKILL",
      payload: newData,
    });
    dispatch({
      type: "SET_ADD_PORTO_SUCCESS",
      payload: Toast.fire({
        icon: 'success',
        title: 'Add skill success'
      })
    });
  }
}