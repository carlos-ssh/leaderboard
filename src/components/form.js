const form = (submitForm) => {
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
  button.onclick = submitForm;

  form.append(inputName);
  form.append(inputScore);
  form.append(button);

};

export default form;