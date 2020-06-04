function menu() {
  const heading = document.createElement('h1');
  const lunch = document.createElement('h2');
  const dinner = document.createElement('h2');
  const article = document.getElementById('article');

  article.innerHTML = '';

  article.appendChild(heading);
  article.appendChild(lunch);
  article.appendChild(dinner);

  heading.innerHTML = 'Menu';
  lunch.innerHTML = 'lunch menu';
  dinner.innerHTML = 'dinner menu';
}

export { menu };
