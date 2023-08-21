const cars = [
    {carname : 'Audi', price: 350000},
    {carname : 'BMW', price: 400000},
    {carname : 'kia', price: 230000}
];

// function

function getCars() {
    setTimeout( () => {
        cars.forEach( (car) => {
            console.log(car.carname)
        });
    }, 1000); 
}

function createNewCars(newcar, callback) { // here callback badulu xyz kuda ivvachu
    setTimeout( () => {
        cars.push(newcar);
        callback();
        
    }, 500);
    
}

function testFun() {
    console.log('test fun');
}

// call when required

// getCars();
createNewCars({carname: 'Tesla', price: 27000}, getCars);
testFun();