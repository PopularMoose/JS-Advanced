function addItem() {

    let ItemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    inputElement.value = '';


    let DeleteElement = document.createElement('a');
    DeleteElement.href = '#';
    DeleteElement.textContent = '[Delete]';
    DeleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });



    liElement.appendChild(DeleteElement);
    ItemsElement.appendChild(liElement);


}