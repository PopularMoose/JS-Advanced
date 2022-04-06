class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        
        
    }
    addBook (bookName, bookAuthor){
        if (this.capacity < this.books.length+1) {
            throw new Error('Not enough space in the collection.');
        }
        
        let book = {
            Author: bookAuthor,
            Name: bookName,
            payed: false
            
        }
        
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName){
       if (!this.books.find(x=> x.Name == bookName)) {
           throw new Error(`${bookName} is not in the collection.`)
       }
       if (this.books.find(x=> x.Name == bookName).payed == true) {
           throw new Error(`${bookName} has already been paid.`)
       }
       this.books.find(x=> x.Name == bookName).payed = true;
         return `${bookName} has been successfully paid.`
        
        }


    removeBook(bookName) {
        if (!this.books.find(x=> x.Name == bookName)) {
            throw new Error('The book, you\'re looking for, is not found.')
        }
         if (this.books.find(x=> x.Name == bookName).payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books = this.books.filter(x=> x.Name != bookName);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor){
        
        let result = [];
        
        if (this.books.find(x=> x.Author == bookAuthor)) {
            this.books
            .sort((a,b)=> b.Name - a.Name)
            .forEach(x => {
                if (this.books.find(x=> x.Author == bookAuthor)) {
                    
                    result.push(`${x.Name} == ${x.Author} - ${x.payed?'Has Paid':'Not Paid'}.`);
                }
            })
            
        }else{
            
            result.push(`The book collection has ${Math.abs(this.capacity-this.books.length)} empty spots left.`);
            this.books
            .sort((a,b)=> b.Name - a.Name)
            .forEach(x => {
                 result.push(`${x.Name} == ${x.Author} - ${x.payed?'Has Paid':'Not Paid'}.`);
             })
        }
        return result.join('\n');
        
        
        
    }
    }
    const library = new LibraryCollection(2)
    console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
    console.log(library.getStatistics('Miguel de Cervantes'));
    
    
    
    

    


