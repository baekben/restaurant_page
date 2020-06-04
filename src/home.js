function nav() {
  const content = document.getElementById('content');
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  const heading = document.createElement('h1');
  const motto = document.createElement('h2');

  heading.innerHTML = 'Fancy Restaurant Est.19XX';
  motto.innerHTML =
    'Bringing classic "insert European country here" food since 19XX';
  content.appendChild(main);
  main.appendChild(heading);
  main.appendChild(motto);
}

export { nav };
