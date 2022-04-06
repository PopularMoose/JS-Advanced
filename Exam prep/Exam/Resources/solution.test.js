let { expect } = require('chai');
let { Repository } = require("./solution.js");

describe("Repository", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };



    describe("Initialization",  () => {
        it("Should add props property on init",  () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
        });

        it("Should have property data on init", () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
        })
    });



    describe('Add entity', () => {
      it('Should return zero', () => {
          let repository = new Repository(properties);

         expect(repository.add(entity)).to.equal(0);
         expect(repository.add(entity)).to.equal(1);
    });
    it('Should store valid entity in data map', ()=>{
        let repository = new Repository(properties);
        
        repository.add(entity);

        expect(repository.data.get(0)).not.to.be.undefined;
        expect(repository.data.get(0)).to.deep.equal(entity);
        expect(repository.data.get(0)).to.have.property('name').that.equals('Pesho');
        expect(repository.data.get(0)).to.have.property('age').that.equals(22);
        expect(repository.data.get(0)).to.have.property('birthday');


    })

    it('Should throw error if property is missing', ()=> {
        let entity = {
            name: "Pesho",
            age: 22,
        };

        let repository = new Repository(properties);

        expect(() => repository.add(entity)).to.throw(Error, `Property birthday is missing from the entity!`);
       
    })

    it('Should throw error if property has other type', ()=> {
        let entity = {
            name: "Pesho",
            age: 22,
            birthday: '1998-01-06T22:00:00.000Z',
        };

        let repository = new Repository(properties);

        expect(() => repository.add(entity)).to.throw(Error, `Property birthday is not of correct type!`);
    })
    });



    describe('Get count', () => {
        it('Should return number of entities', ()=> {
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            


            expect(repository.count).is.equal(3);
           
    });

    it('Should return zero if no added entities', () => {
        let repository = new Repository(properties);
        expect(repository.count).is.equal(0);
    })

})

describe('Get Id', ()=>{
    it('Should return entity by Id', ()=>{
        let repository = new Repository(properties);

        repository.add(entity);

        expect(repository.getId(0)).to.deep.equal(clonedEntity);
        
    });
    it('Should throw error when no id is found', ()=> {
        let repository = new Repository(properties);

        expect(() => repository.getId(1)).to.throw(Error, `Entity with id: 1 does not exist!`)
    })
})
});
