function solve(n, k){

     let Inputlength = [1];
    let sum = 0;
      let result = 0;


     for (let index = 1; index < n; k++) {
         index++;
        sum = Inputlength[1] + Inputlength[2];
        Inputlength.push(n[index]);
         
     }
         
     console.log(Inputlength);

}
solve(6, 3)