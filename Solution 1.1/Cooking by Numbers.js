function demo(number, p1, p2, p3, p4, p5) {

    let inputAsNumber = Number(number);
    let arrOfCommands = [p1, p2, p3, p4, p5];

    let chop = function () {
        return inputAsNumber / 2;
    };
    let dice = function () {
        return Math.sqrt(inputAsNumber);
    };
    let spice = function () {
        return inputAsNumber+1;
    };
    let bake = function () {
        return inputAsNumber * 3;
    };
    let fillet = function () {
        return inputAsNumber * 0.80;
    };
    for (let i = 0; i < arrOfCommands.length; i++) {
        let currentCommand = arrOfCommands[i];
        switch (currentCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber);
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber);
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber);
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber);
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber);
                break;
        }
        console.log(inputAsNumber);
    }

}
demo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')