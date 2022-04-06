function demo(fruit, weight, price) {

    let type = fruit;
    let fruitWeight = weight;
    let pricePerKilo = price;

    let weightInKilos = fruitWeight / 1000;
    let sum = weightInKilos * pricePerKilo;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${type}.`);

}
demo('orange', 2500, 1.80);

