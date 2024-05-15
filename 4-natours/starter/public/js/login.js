/* eslint-disable*/
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      location.assign('/');
    }

    console.log(res);
  } catch (err) {
    alert(err.response.data.message);
  }
};
