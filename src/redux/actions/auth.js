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

const authRegisterRecruiter = (
  name,
  email,
  company,
  position,
  phoneNumber,
  password,
  confirmationPassword,
) => async (dispatch) => {
  const form = new URLSearchParams();

  form.append('name', name);
  form.append('email', email);
  form.append('company_name', company);
  form.append('position', position);
  form.append('phone_number', phoneNumber);
  form.append('password', password);
  form.append('confirmation_password', confirmationPassword);
  console.log('catch',name,
    email,
    company,
    position,
    phoneNumber,
    password,
    confirmationPassword,)
  try {
    const { data } = await http().post(
      `${URL}/auth/register/recruiter`,
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
        payload: data.succsess.token
      });
    } catch (err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: Toast.fire({
          icon: 'error',
          title: 'username or password false'
        })
      }) //error from axios
    }
  };
};

const authLoginEmployee = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    form.append("email", email);
    form.append("password", password);
    try {
      const { data } = await http().post(`${URL}/auth/login/worker`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: data.results.token
      });
    } catch (err) {
      dispatch({
        type: "AUTH_LOGIN_FAILED",
        payload: Toast.fire({
          icon: 'error',
          title: 'username or password false'
        })
      }) //error from axios
    }
  };
};


const forgotPass = (email) => {
  return async (dispatch) => {
    console.log('dapat email', email)
    const form = new URLSearchParams();
    form.append("email", email);
    try {
      const { data } = await http().post(`${URL}/auth/forgot-password/recruiter`, form.toString());
      dispatch({
        type: 'SET_FORGOT_PASSWORD',
        payload: Toast.fire({
          icon: 'success',
          title: data.message
        })
      });
    } catch (err) {
      dispatch({
        type: "FORGOT_PASSWORD_FAILED",
        payload: Toast.fire({
          icon: 'error',
          title: err.response.data.message
        })
      }) //error from axios
    }
  };
};

const authLogout = () => ({
  type: "AUTH_LOGOUT"
})



export { authLogout, authRegister,authRegisterRecruiter, authLogin,authLoginEmployee, forgotPass };

