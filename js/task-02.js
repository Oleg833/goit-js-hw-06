const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeIngredientCard = ingredient => {
  const ingredientCardEl = document.createElement('li');
  ingredientCardEl.textContent = ingredient;
  ingredientCardEl.classList.add('item');

  return ingredientCardEl;
};
const makeIngredientsList = ingredients.map(makeIngredientCard);

document.querySelector('#ingredients').append(...makeIngredientsList);

// const lastFragment = new DocumentFragment();
// for (const ingredient of ingredients) {
//   const ingredientCardEl = document.createElement('li');
//   ingredientCardEl.textContent = ingredient;
//   ingredientCardEl.classList.add('item');
//   lastFragment.appendChild(ingredientCardEl);
// }
// document.querySelector('#ingredients').append(lastFragment);

// const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('\n');

// const markup = ingredients.reduce(
//   (acc, ingredient) => acc + `<li class="item">${ingredient}</li>`,
//   ''
// );

// document.querySelector('#ingredients').innerHTML = markup;

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// console.log(document.querySelector('#ingredients').innerHTML);
