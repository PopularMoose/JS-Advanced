function solve(array){

 let towns = {};

 for (const info of array) {
     let infoArr = info.split(' <-> ');
     let town = infoArr[0];
     let population = Number(infoArr[1]);

     if (!towns[town]) {
         towns[town] = 0;
     }
     towns[town] += population;
 }

  for (const town in towns) {
      console.log(`${town} : ${towns[town]}`);
  }
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);