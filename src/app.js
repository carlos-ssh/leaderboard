import './style.css';
import listObjects from './components/listObjects';
import form from './components/form';
import { addScores, getScores } from './components/dataApi';

const displayAll = () => {
  const sl = document.getElementById('score-list');
  const response = getScores();
  let data = [];
  const liLoading = listObjects({ user: 'Requesting data from API', score: 'nothing to show' });
  sl.append(liLoading);
  response
    .then((response) => {
      data = [...response.data.result];
      sl.innerHTML = '';
      data.forEach((score) => {
        const li = listObjects(score);
        sl.append(li);
      });
    })
    .catch((error) => {
      const li = listObjects({ 
        user: 'User Error', 
        score: error.message 
      });
      sl.append(li);
    });
};

const submitForm = (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value = '';
  const score = document.getElementById('score').value = '';
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