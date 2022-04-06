function solve(array){

     let Input = [];
     let smaller = 0;
     let small = 0;
     for (let index = 0; index < array.length; index++) {
         array.sort((a,b) => a - b);
         Input.push(array[index]);
         

         
     }
     console.log(Input.shift());
     console.log(Input.shift());
    
}
solve([3, 0, 10, 4, 7, 3]);