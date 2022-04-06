function extractText() {
    let Element = document.getElementById('items');
    
    let Result = document.getElementById('result');
    Result.textContent = Element.textContent;

}