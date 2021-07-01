/*eslint-disable*/
import http from '../../helpers/http';
import Swal from 'sweetalert2'
const { REACT_APP_BACKEND_URL: URL } = process.env;

const authRegister = (
  name,
  email,
  phoneNumber,
  password,
  confirmationPassword,
) => async (dispatch) => {
  const form = new URLSearchParams();
  console.log('massuuk',name,
    email,
    phoneNumber,
    password,
    confirmationPassword,)
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
      payload: Swal.fire('Register Successfully')
    });
  } catch (error) {
    dispatch({
      type: 'SET_AUTH_REGISTER_FAILED',
      payload: Swal.fire(error.response.data.message)
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
