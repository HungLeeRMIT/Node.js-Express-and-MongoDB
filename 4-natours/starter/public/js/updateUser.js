import { showAlert } from './alerts';

export const updateUser = async (data, type) => {
  try {
    const url = type === 'password' ? 'updateMyPassword ' : 'updateMe';

    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/v1/users/${url}`,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
