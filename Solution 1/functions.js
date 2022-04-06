
// Function declaration
function printFullName(Firstname, lastName) {
    console.log(Firstname + ' ' + lastName);
}

printFullName('Peter','Ivanov');

//Function invokation
//Functions са само стойности

let countDown = function(number){

    for (let i= number; i > 0; i--){
        console.log(i);
    }
}

countDown(10);


//Arrow Function

let countUp = (max) => {

    
    for (let i= 0; i < max; i++){
        console.log(i);
    }
}

countUp(10);
