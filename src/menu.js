const currentMenu = [];

function menu() {
  const heading = document.createElement('h1');
  const mainMenu = document.createElement('div');
  mainMenu.setAttribute('class', 'mainMenu');
  const article = document.getElementById('article');


  article.appendChild(heading);
  article.appendChild(mainMenu);
  heading.innerHTML = 'Menu';
  options();
}
const options = () => {
  const classicBurger = items(
    'Burger',
    '10',
    'Beef burger, Chicken Burger, Veggie Burger'
  );
  const sandwich = items(
    'Sandwich',
    '8',
    'Choose from B.L.T, Ham, Turkey, Roast Beef'
  );
  const spaghetti = items('Spaghetti', '12', 'Plain old spaghetti');
  const lasagna = items('Lasagna', '12', 'Fresh from the oven');
  const tomato = items('Tomato Soup', '5', 'Homemade organic tomato soup');
  const pizza = items(
    'Pizza',
    '8',
    'Pepperoni, Cheese, Meat, BBQ Chicken, Buffalo, Veggie'
  );
  const drinks = items(
    'Drinks',
    '5',
    'Orange Juice, Apple Juice, Strawberry Smoothie, Chocolate Shake'
  );

  currentMenu.push(
    classicBurger,
    sandwich,
    spaghetti,
    lasagna,
    tomato,
    pizza,
    drinks
  );
};

const items = (item, price, desc) => {
  const mainMenu = document.getElementsByClassName('mainMenu');
  const foodItems = document.createElement('h3');
  mainMenu[0].appendChild(foodItems);
  const name = document.createElement('span');
  const itemPrice = document.createElement('span');
  const info = document.createElement('p');
  foodItems.appendChild(name);
  foodItems.appendChild(itemPrice);
  mainMenu[0].appendChild(info);

  name.innerHTML = item;
  itemPrice.innerHTML = price;
  info.innerHTML = desc;
};

export { menu };
