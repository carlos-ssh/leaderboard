import './style.css';
import listScore from './components/listObjects';
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

const submitForm = (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  const game = { user, score };

  const response = addScores(game);
  response.then((resp) => {
    console.log(resp);
  });
  displayAll();
};


const handleRefresh = () => {
  displayAll();
};

const initializer = () => {
  displayAll();
  form(submitForm);
  const refreshBtn = document.getElementById('refresh');
  refreshBtn.onclick = handleRefresh;
}

initializer();