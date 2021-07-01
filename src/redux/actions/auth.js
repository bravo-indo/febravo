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

const authRegister = (
  name,
  email,
  phoneNumber,
  password,
  confirmationPassword,
) => async (dispatch) => {
  const form = new URLSearchParams();

  form.append('name', name);
  form.append('email', email);
  form.append('phone_number', phoneNumber);
  form.append('password', password);
  form.append('confirmation_password', confirmationPassword);
  try {
    const { data } = await http().post(
      `${URL}/auth/register/worker`,
      form.toString(),
    );
    dispatch({
      type: 'SET_AUTH_REGISTER'
    });
    dispatch({
      type: 'SET_AUTH_REGISTER_SUCCESS',
      payload: Toast.fire({
        icon: 'success',
        title: 'Register successfully'
      })
    });
  } catch (error) {
    dispatch({
      type: 'SET_AUTH_REGISTER_FAILED',
      payload: Toast.fire({
        icon: 'error',
        title: error.response.data.message
      })
    })
  }
};

const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`http://localhost:8080/auth/login/recruiter`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: data.message.token
      });
    } catch (err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: err.response.data.message, //error from axios
      });
    }
  };
};

export { authRegister, authLogin };
