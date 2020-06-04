function about() {
  var about = document.createElement('div');
  about.id = 'about';

  var heading = document.createElement('h1');
  var bio = document.createElement('h3');

  heading.innerHTML = 'About Us';
  bio.innerHTML =
    'Story about how restaurant was formed. \n From a family recipe the popularity of the resturant grew and was brought to the US';

  about.appendChild(heading);
  about.appendChild(bio);

  document.body.appendChild(about);
}
