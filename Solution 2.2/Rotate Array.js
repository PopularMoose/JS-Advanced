function solve(arr,num){


for (let index = 0; index < num; index++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
}
console.log(arr.join(' '));
}
solve(['1', '2', '3', '4'], 2);