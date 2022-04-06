function sumTable() {
 let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
 
 let sum = Array.from(costElements).reduce((a, x) => {
    let current =  Number(x.textContent) || 0;
    return a + current;
 }, 0);
 
 let result = document.getElementById('sum');
 result.textContent = sum;
}