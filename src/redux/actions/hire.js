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

export const hire = (data, id ,token) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("project", data.purpose);
    form.append("name_recruiter", data.name);
    form.append("email_recruiter", data.email);
    form.append("phone_number_recruiter", data.phone);
    form.append("desc_hire", data.desc);
    const { data: newData } = await http(token).post(
      `${URL}/user/recruiter/details/${id}`,
      form
    );
    dispatch({
      type: "SET_HIRE",
      payload: newData,
    });
    dispatch({
      type: "SET_ADD_EXPERIENCE_SUCCESS",
      payload: Toast.fire({
        icon: 'success',
        title: 'hire successfully'
      })
    });
    dispatch({
      type: "SET_CLEAR_USER",
    });
  }
}