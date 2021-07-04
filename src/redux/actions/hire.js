/*eslint-disable*/
import http from '../../helpers/http';

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const addHireData = (data, token) => (
  async (dispatch) => {
    const form = new FormData();
    form.append('id_worker', data.id_worker);
    form.append('id_recruiter', data.id_recruiter);

    const { data: newData } = await http(token).post(
      `${URL}/user/recruiter/detail/${data.id_worker}`,
      form,
    );
    dispatch({
      type: 'ADD_HIRE',
      payload: newData.results,
    });
  }
);

// export {addHireData}
