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

export const resetPassword = (data, email) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("password", data.password);
    form.append("confirmation_password", data.confirm_password);
    const { data: newData } = await http().patch(
      `${URL}/auth/reset-password/recruiter/${email}`,
      form
    );
    dispatch({
      type: "SET_RESET_PASSWORD",
      payload: Toast.fire({
        icon: 'success',
        title: 'reset password successfully'
      })
    });
  }
}