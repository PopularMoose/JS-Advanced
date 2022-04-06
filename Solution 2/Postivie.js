function solve(array){

   let Input = [];
   for (let index = 0; index < array.length; index++) {
       if (array[index] >= 0) {
           Input.push(array[index]);
       }
       else
       {
           Input.unshift(array[index]);
       }

       
       
   }
console.log(Input.join("\n"));
}
solve([3, -2, 0, -1]);