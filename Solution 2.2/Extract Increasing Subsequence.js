function solve(array){
    
    let thearray = [1,  3,   8,   4,   10,  12,   3,  2,   24];
    let biggest = Number();
     
    for (let index = 0 ; index < array.length;) {

       biggest = array[index];
       index++;
      if (biggest > array[index]) {
         thearray.push(biggest);
      }
      
    }
  console.log(thearray);
}
solve([1,  3,   8,   4,   10,  12,   3,  2,   24] );