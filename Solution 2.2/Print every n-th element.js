function solve(array, input){

let resultArr = [];
for (let index = 0; index < array.length; index+=input) {
    resultArr.push(array[index]);
    
}

return resultArr;

}
solve(['5', '20', '31', '4', '20'], 2);