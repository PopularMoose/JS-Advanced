function solve(array){

 return array.filter((a,b) => b % 2 !== 0)
 .map(x => x * 2)
 .reverse()
 .join(' ');
}
solve([10, 15, 20, 25])