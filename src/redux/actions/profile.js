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

const updateProfileRecruiter = (data, token) => {
  return async (dispatch) => {
    console.log('data profile masuk',data, token)
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File size is too large");
      }
    }
    const form = new FormData();
    form.append("company_name", data.compName);
    form.append("company_field", data.bidang);
    form.append("address", data.city);
    form.append("email", data.email);
    form.append("description", data.desc);
    form.append("images", data.file);
    form.append("instagram", data.instagram);
    form.append("linked_in", data.linkedin);
    form.append("phone_number", data.phone);

    const { data: newData } = await http(token).put(
      `${URL}/user/recruiter/details/editprofile`,
      form
    );
    dispatch({
      type: "SET_UPDATE_PROFILE_RECRUITER",
      payload: window.alert(newData.message),
    });
  }
}

const updateProfile = (data, token) => {
  return async (dispatch) => {
    console.log('data profile masuk',data, token)
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File size is too large");
      }
    }
    const form = new FormData();
    form.append("name", data.name);
    form.append("job_desk", data.bidang);
    form.append("address", data.address);
    form.append("description", data.desc);
    form.append("images", data.file);
    form.append("company_name", data.compName);

    const { data: newData } = await http(token).put(
      `${URL}/user/details/editprofile`,
      form
    );
    dispatch({
      type: "SET_UPDATE_PROFILE",
      payload: window.alert(newData.message),
    });
  }
}

export {getProfileData, updateProfileRecruiter, updateProfile}
