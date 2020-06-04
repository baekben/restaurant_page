function nav() {
  var content = document.getElementById('content');

  var heading = document.createElement('h1');
  var motto = document.createElement('h2');

  heading.innerHTML = 'Fancy Restaurant Est.19XX';
  motto.innerHTML =
    'Bringing classic "insert European country here" food since 19XX';

  content.appendChild(heading);
  content.appendChild(motto);
}

export { nav };
