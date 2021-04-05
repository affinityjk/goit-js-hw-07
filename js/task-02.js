const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsListElements = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;

  return listItemEl;
});

ingredientsListEl.append(...ingredientsListElements);

console.log(ingredientsListEl);