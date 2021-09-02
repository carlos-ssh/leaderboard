const results = [
  {
    id: 0,
    name: 'Продукты',
    score: 100
  },
  {
    id: 1,
    name: 'John Banana',
    score: 20
  },
  {
    id: 2,
    name: 'Patrick',
    score: 10
  },
  {
    id: 3,
    name: 'Carlos',
    score: 50
  },
  {
    id: 4,
    name: 'Oscar',
    score: 60
  },
  {
    id: 5,
    name: 'Albert Pike',
    score: 40
  },
  {
    id: 6,
    name: 'Robert',
    score: 70
  },
];

const chartList = document.getElementById('chartList');

const addResult = () => {
  return result.forEach((item) => {
      chartList.innerHTML = '';
      const content = `
      <li key=${item.id}>
        <span>${item.name}</span>
        <span>${item.score}</span>
      </li>`;
      const list = document.getElementById('div');
      list.className = list;
      list.innerHTML = content;

      chartList.appendChild();
  });
}

addResult();
