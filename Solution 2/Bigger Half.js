function solve(array){

     let Input = [];
     for (let index = 0; index < array.length; index++) {
        array.sort((a,b) => a - b);
        Input.push(array[index]);
    }
    if (array.length % 2 == 0) {
        Input.shift();
        Input.shift();
    }
    else {
        Input.shift();
        Input.shift();
        Input.shift();
        
    }
     return Input;
}
solve([4,7,2,5])