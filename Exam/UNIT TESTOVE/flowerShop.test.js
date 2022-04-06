let { expect } = require('chai');
let { flowerShop } = require("./flowerShop.js");

describe("Neshto",function (){
describe("Oshte neshto", ()=>{
   it('Invalid string',()=>{
    
      expect(()=> flowerShop.calcPriceOfFlowers(1,1)).to.throw('Invalid input!');
   })
   it('Invalid price', ()=>{
    expect(()=> flowerShop.calcPriceOfFlowers('1','1')).to.throw('Invalid input!');
   })
   it('Invalid quantity', ()=>{
    expect(()=> flowerShop.calcPriceOfFlowers('1','1')).to.throw('Invalid input!');
   })
   it('VALID',()=>{
       expect(flowerShop.calcPriceOfFlowers('petunq',1,3)).to.equal(`You need $3.00 to buy petunq!`)
   })
})
describe("KUR",()=>{
    it('Shoudl',()=>{
        expect( flowerShop.checkFlowersAvailable('KUR',['KUR','CHERNO'])).to.equal(`The KUR are available!`)
    })
    it('Shoudl2',()=>{
        expect( flowerShop.checkFlowersAvailable('KUR',[])).to.equal(`The KUR are sold! You need to purchase more!`)
    })
})
describe("CHEPINCI",()=>{
    it("DA",()=>{
        expect(()=> flowerShop.sellFlowers([],1).to.throw('Invalid input!'));
    })
    it("NE",()=>{
        expect(()=> flowerShop.sellFlowers([],-1).to.throw('Invalid input!'));
    })
    it("kurarar",()=>{
        expect( flowerShop.sellFlowers(['a','b','abc'],2)).to.equal(`a / b`)
    })
})
});