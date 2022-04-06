function solve(input){

    let products = [];
    
    while(input.length > 0){
        
        let [Town,Product,Price] = input.shift().split(' | ')
        
        if (products.filter(x=> x.Product === Product).length > 0) {
            
            let obj = products.find(x => x.Product === Product);

            if (obj.Price > Number(Price)) {
                obj.Price = Number(Price);
                obj.Town = Town;
            }
        }
        else{
            let obj = {Product,Town,Price:Number(Price)};
            products.push(obj);
        }
    }
    for (let product of products) {
        console.log(`${product.Product} -> ${product.Price} (${product.Town})`);
            
        }
    }
    

    
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);