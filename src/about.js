function about() {
  const heading = document.createElement('h1');
  const bio = document.createElement('h3');
  const article = document.getElementById('article');
  article.innerHTML = '';

  article.appendChild(heading);
  article.appendChild(bio);

  heading.innerHTML = 'About Us';
  bio.innerHTML =
    'Story about how restaurant was formed. \n From a family recipe the popularity of the resturant grew and was brought to the US';
}

export { about };
