import axios from 'axios';

const gameId = 'GZuf5tkUFwlzMAjaXw1X';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const getScores = async () => {
  const response = await axios.get(`${apiURL}/games/${gameId}/scores`);
  return response;
};

const addScores = async (game) => {
  const response = await axios.post(`${apiURL}/games/${gameId}/scores`, game);
  return response;
};

export { getScores, addScores };