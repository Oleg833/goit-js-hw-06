const itemElements = document.querySelectorAll('.item');
console.log(`Number of categories: ` + itemElements.length);

const resultArray = [...itemElements]
  .map(
    item => `Category: ${item.children[0].textContent} 
    Elements: ${item.children[1].children.length}`
  )
  .join('\n');
console.log(resultArray);
