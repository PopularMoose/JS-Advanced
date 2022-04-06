function demo(input) {

    let number = input.toString();
    let isSame = true;
    let sum = 0;
    let digitToProve = number[0];
    const inputLenght = number.length;

    for (let index = 0; index < inputLenght; index++) {
        
        
        sum += +number[index];

        if (number[index] !== digitToProve) {
            isSame = false;
        }

    }
    console.log(isSame);
    console.log(sum);
}
demo(2222222);