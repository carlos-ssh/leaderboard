const listScore = (data) => {
  const li = document.createElement('li');
  const p = document.createElement('p');

  p.textContent = `${data.name} - ${data.score}`;
  li.appendChild(p);

  return li;
}

export default listScore;
