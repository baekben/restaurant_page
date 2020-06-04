function contact() {
  const heading = document.createElement('h1');
  const info = document.createElement('h3');
  const article = document.getElementById('article');
  article.innerHTML = '';

  article.appendChild(heading);
  article.appendChild(info);

  heading.innerHTML = 'Contact Us';
  info.innerHTML = '12345 PL 67st\nABC, DEFGHI XXXXXX';
}

export { contact };
