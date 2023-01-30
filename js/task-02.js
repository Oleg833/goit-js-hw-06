const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('\n');

document.querySelector('ul#ingredients').innerHTML = markup;

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// const lastFragment = new DocumentFragment();
// for (const item of ingredients) {
//   const list = document.createElement('li');
//   list.textContent = item;
//   list.classList.add('item');
//   lastFragment.appendChild(list);
// }
// document.querySelector('ul#ingredients').append(lastFragment);

console.log(document.querySelector('ul#ingredients').innerHTML);
