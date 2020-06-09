const content = document.getElementById('content');

function nav() {
  const main = document.createElement('div');
  main.setAttribute('class', 'hero-image');

  const mainText = document.createElement('div');
  mainText.setAttribute('class', 'mainText');
  main.appendChild(mainText);
  const heading = document.createElement('h1');
  const motto = document.createElement('h4');

  heading.innerHTML = 'Fancy Restaurant Est.19XX';
  motto.innerHTML =
    'Bringing classic "insert European country here" food since 19XX';
  content.appendChild(main);
  mainText.appendChild(heading);
  mainText.appendChild(motto);
}

function welcome() {
  const welcome = document.getElementById('article');
  welcome.setAttribute('class', 'welcome');
  content.appendChild(welcome);
  const greet = document.createElement('h1');
  const message = document.createElement('p');
  greet.innerHTML = 'Welcome to Fancy Restaurant';
  message.innerHTML =
    'We offer an excellent selection of food and also cater for customers as well.';
  welcome.appendChild(greet);
  welcome.appendChild(message);
  const homeImg = document.createElement('img');
  homeImg.setAttribute('src', 'img/table_food.jpg');
  homeImg.setAttribute('alt', 'Table with food');
  homeImg.setAttribute('id', 'homeImg');
  welcome.appendChild(homeImg);
}

export { nav, welcome };
