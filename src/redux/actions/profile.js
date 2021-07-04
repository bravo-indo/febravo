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
      payload: newData.message,
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
      payload: newData.message,
    });
  }
}

const getPorto = (token) => {
  console.log('token masuk', token)
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/user/details/portofolio`);
    console.log(data.results);
    dispatch({
      type: "SET_GET_PORTO",
      payload: data.results,
    });
  };
}

const getExperience = (token) => {
  console.log('token masuk', token)
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/user/details/experience`);
    console.log(data.results);
    dispatch({
      type: "SET_GET_EXPERIENCE",
      payload: data.results,
    });
  };
}

const addPorto = (data, token) => {
  return async (dispatch) => {
    console.log('data profile porto',data, token)
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File size is too large");
      }
    }
    const form = new FormData();
    form.append("project_name", data.nameApp);
    form.append("repository", data.repo);
    form.append("type_project", 'aplikasi');
    form.append("portofolio_file", data.filePorto);

    const { data: newData } = await http(token).post(
      `${URL}/user/details/editprofile`,
      form
    );
    dispatch({
      type: "SET_ADD_PORTO",
      payload: newData,
    });
    dispatch({
      type: "SET_ADD_PORTO_SUCCESS",
      payload: Toast.fire({
        icon: 'success',
        title: 'Add portofolios successfully'
      })
    });
  }
}

const addExperience = (data, token) => {
  return async (dispatch) => {
    console.log('data profile exp',data, token)
    const sizeLimit = 1024 * 1024 * 2;
    if (data.file) {
      if (data.file.size > sizeLimit) {
        window.alert("File size is too large");
      }
    }
    const form = new URLSearchParams();
    form.append("company_name", data.companyName);
    form.append("position", data.position);
    form.append("month_years", data.month);
    form.append("description", data.description);

    const { data: newData } = await http(token).post(
      `${URL}/user/details/editprofile/experienceWork`,
      form
    );
    dispatch({
      type: "SET_ADD_EXPERIENCE",
      payload: newData,
    });
    dispatch({
      type: "SET_ADD_EXPERIENCE_SUCCESS",
      payload: Toast.fire({
        icon: 'success',
        title: 'Add experience successfully'
      })
    });

  }
}

const getDetailProfile = (id, token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/user/recruiter/details/${id}`);
    dispatch({
      type: "SET_GET_DETAIL_USER",
      payload: data.results,
    });
  };
};

export {getDetailProfile, addExperience, getExperience, getProfileData, updateProfileRecruiter,getPorto,addPorto, updateProfile}
