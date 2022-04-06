function solve(array, first, second){
 
    const start = array.indexOf(first);
    const end = array.indexOf(second)+1;

    const result = array.slice(start, end);

    return result;

}
solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');