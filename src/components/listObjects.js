const listScore = (data) => {
  const li = document.createElement('li');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = data.user;
  p2.textContent = data.score;
  li.appendChild(p1);
  li.appendChild(p2);

  return li;
}

export default listScore;
