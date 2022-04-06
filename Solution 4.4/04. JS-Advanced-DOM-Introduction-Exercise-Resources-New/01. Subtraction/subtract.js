function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let first = Number(firstNumber.value);
    let secondNumber = document.getElementById('secondNumber');
    let second = Number(secondNumber.value);
    let result = first - second;
    
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
    

    
}