import './style.css';
import listScore from './components/listOjects';
import form from './components/form';
import { addScores, getScores } from './components/dataApi';

const displayAll = () => {
  const sl = document.querySelector('.score-list');
  const response = getScores();
  let data = [];
  const liLoading = listScore({ user: 'Requesting data from API', score: '' });
  sl.append(liLoading);
  response
    .then((response) => {
      data = [...response.data.result];
      sl.innerHTML = '';
      data.forEach((score) => {
        const li = listScore(score);
        sl.append(li);
      });
    })
    .catch((error) => {
      const li = listScore({ 
        user: 'Error', 
        score: error.message 
      });
      console.log(error);
      sl.append(li);
    });
};

