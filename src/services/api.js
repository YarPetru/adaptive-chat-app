import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io/jokes/';

export const getAnswer = async () => {
  const response = await axios.get(`random`);
  return response.data.value;
};
