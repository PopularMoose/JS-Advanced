function addItem() {
   
    let input = document.getElementById('newItemText');
    let ElementsLi = document.createElement('li');
    let items = document.getElementById('items');

    ElementsLi.textContent = input.value;

    items.appendChild(ElementsLi);
}