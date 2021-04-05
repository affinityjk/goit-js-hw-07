const categoriesList = document.querySelector('#categories');

const categoriesItemsByClass = categoriesList.querySelectorAll('.item');
console.log(`В списке ${categoriesItemsByClass.length} категории:`);

categoriesItemsByClass.forEach(itemByClass => {
  console.log('Категория: ', itemByClass.firstElementChild.textContent);
  console.log('Количество: ', itemByClass.querySelector('.item > ul').children.length);
});

  // const categoriesItemTitleEl = document.querySelector('h2');
  // console.log('Категория: ', categoriesItemTitleEl.textContent);

  // const categoriesItemsListEl = document.querySelectorAll('ul');
  // console.log('Количество: ', categoriesItemsListEl.length);






