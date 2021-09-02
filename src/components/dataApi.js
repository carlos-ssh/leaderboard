import axios from 'axios';

const apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const key = 'pMxFA7HzjrI3CVSUQpgA';

const addScores = async (game) => {
  const response = await axios.post(`${apiLink}/games/${key}/scores`, game);
  return response;
}

const getScores = async () => {
  const response = await axios.get(`${apiLink}/games/${key}/scores`, game);
  return response;
}

export { addScores, getScores };