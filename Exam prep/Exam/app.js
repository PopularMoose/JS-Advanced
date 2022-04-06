window.addEventListener('load', solve);

function solve() {

    const furniture = document.getElementById('furniture-list');
    const addButtonElement = document.getElementById('add');
    const ModelInput = document.getElementById('model');
    const DescriptionInput = document.getElementById('description');
    const YearInput = document.getElementById('year');
    const PriceInput = document.getElementById('price');
    
    addButtonElement.addEventListener('click', addClickHandler);
    function addClickHandler(e) {
        e.preventDefault();
        
        let description = DescriptionInput.value;
        let model = ModelInput.value;
        let year = Number(YearInput.value);
        let price = Number(PriceInput.value);

       if (!ModelInput.value || !DescriptionInput.value) {
           return;
       }
       if (year <= 0 || price <= 0) {
           return;
       }
    
       // TABLE DATA AND MODELS
       let rowElement = document.createElement('tr');
       let modelCellElement = document.createElement('td');
       let priceCellElement = document.createElement('td');
       let actionsCellElement = document.createElement('td');
       let ButtonMoreInfo = document.createElement('button');
       let BuyButton = document.createElement('button');
       let totalPrice = document.querySelector('.total-price');

       //BUTTON INFO
       ButtonMoreInfo.addEventListener('click', (e)=>{
           if (e.currentTarget.textContent == 'More info') {
            e.currentTarget.textContent = 'Less info';
            contentsRowElement.style.display = 'contents';
           }else{
               e.currentTarget.textContent = 'More info';
               contentsRowElement.style.display = 'none';
           }
       });

       //STYLE
       modelCellElement.textContent = model;
       priceCellElement.textContent = price.toFixed(2);

       ButtonMoreInfo.textContent = 'More Info';
       BuyButton.textContent = 'Buy it';
       
       //BUTTON BUY
       BuyButton.addEventListener('click', (e)=>{
        
        let currentTotalPrice = Number(totalPrice.textContent);
       let  totalPriceEl= currentTotalPrice + price;
       totalPrice.textContent = totalPriceEl.toFixed(2);

        rowElement.remove();
        contentsRowElement.remove();
       })
       



       actionsCellElement.appendChild(ButtonMoreInfo);
       actionsCellElement.appendChild(BuyButton);
       

       //ELEMENTS FOR LIST
       rowElement.classList.add('info');
       ButtonMoreInfo.classList.add('moreBtn');
       BuyButton.classList.add('buyBtn');
       

       rowElement.appendChild(modelCellElement);
       rowElement.appendChild(priceCellElement);
       rowElement.appendChild(actionsCellElement);
    

       // BUTTONS 
       let contentsRowElement = document.createElement('tr');
       let yearContentElement = document.createElement('td');
       let descriptionContentElement = document.createElement('td')
       
       contentsRowElement.classList.add('hide');
       contentsRowElement.style.display = 'none';
       
       
       //STYLE
       yearContentElement.textContent = `Year: ${year}`;
       descriptionContentElement.setAttribute('colspan', 3); 
       descriptionContentElement.textContent = `Description: ${description}`; 
       
       contentsRowElement.appendChild(yearContentElement);
       contentsRowElement.appendChild(descriptionContentElement);

       //DOM TREE   
       furniture.appendChild(rowElement);
       furniture.appendChild(contentsRowElement);
    }






}
