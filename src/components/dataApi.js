import axios from 'axios';

const key = 'pMxFA7HzjrI3CVSUQpgA';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const getScores = async () => {
  const response = await axios.get(`${ apiURL }/games/${ key }/scores`);
  return response;
};

const addScores = async (game) => {
  const response = await axios.post(`${ apiURL }/games/${ key }/scores`, game);
  return response;
};

export { getScores, addScores };