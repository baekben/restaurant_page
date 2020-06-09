import { nav, welcome } from './home';
import { about } from './about';
import { contact } from './contact';
import { menu } from './menu';
//tab switching logics
nav();

const tab = () => {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const tabs = document.createElement('nav');
  const about = document.createElement('button');
  const menu = document.createElement('button');
  const contact = document.createElement('button');
  const article = document.createElement('div');

  about.innerHTML = 'About Us';
  menu.innerHTML = 'Menu';
  contact.innerHTML = 'Contact';

  article.setAttribute('id', 'article');
  tabs.setAttribute('class', 'tabs');
  about.setAttribute('id', 'tabAbout');
  about.setAttribute('class', 'mainTabs');
  menu.setAttribute('id', 'tabMenu');
  menu.setAttribute('class', 'mainTabs');
  contact.setAttribute('id', 'tabContact');
  contact.setAttribute('class', 'mainTabs');

  content.appendChild(header);
  content.appendChild(article);
  header.appendChild(tabs);
  tabs.appendChild(about);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  welcome();
  tabs.addEventListener('click', (e) => {
    chooseTab(e.target.id);
  });
};

const chooseTab = (x) => {
  switch (x) {
    case 'tabAbout':
      about();
      break;
    case 'tabMenu':
      menu();
      break;
    case 'tabContact':
      contact();
      break;
  }
};

tab();
