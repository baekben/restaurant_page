function contact() {
  const heading = document.createElement('h1');
  const info = document.createElement('h3');
  const article = document.getElementById('article');
  article.innerHTML = '';

  article.appendChild(heading);
  article.appendChild(info);

  heading.innerHTML = 'Contact Us';
  info.innerHTML =
    '12345 PL 67st <br>ABC, DEFGHI XXXXXX <br><br>Phone:(123)456-7890<br>Email: restaurant@food.mmm';

  const map = document.createElement('img');
  map.setAttribute('src', 'img/map.jpg');
  article.appendChild(map);
}

export { contact };
