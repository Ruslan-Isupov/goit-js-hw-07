const listOfCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listOfCategories.length);
listOfCategories.forEach(category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
