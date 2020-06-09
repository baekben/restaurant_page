function about() {
  const heading = document.createElement('h1');
  const bio = document.createElement('h3');
  const article = document.getElementById('article');

  article.appendChild(heading);
  article.appendChild(bio);

  heading.innerHTML = 'About Us';
  bio.innerHTML =
    'Story about how restaurant was formed. <br> How restaurant became popular with a classic family recipe';
  const photo = document.createElement('img');
  photo.setAttribute('src', 'img/restaurant.jpg');
  article.appendChild(photo);
}

export { about };
