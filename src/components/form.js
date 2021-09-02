const form = (submitData) => {
  const form = document.getElementById('form-container');
  const inputName = document.createElement('input');
  const inputScore = document.createElement('input');
  const button = document.createElement('button');

  inputName.id = 'name';
  inputName.placeholder = 'Add your Name';
  inputScore.id = 'score';
  inputScore.placeholder = 'Add your Score';

  button.innerText = 'Submit';
  button.id = 'form-btn';
  button.classList.add('form-btn');
  button.onclick = submitScore;

  form.append(inputName);
  form.append(inputScore);
  form.append(button);

  // function submitScore() {
  //   const name = document.getElementById('name').value;
  //   const score = document.getElementById('score').value;
  //   submitData(name, score);
  // }
};

export default form;