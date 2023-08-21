const cars = [
    {carname : 'Audi', price: 350000}, // callback topic is important even in 6 to 7 years people also
    {carname : 'BMW', price:500000},
    {carname : 'WV', price:200000}
];

// CallBack function
function getCars() {
    setTimeout( () => {
        cars.forEach( (car) => {
            console.log(car.carname);
        })

    }, 400);

}

function createNewCars(newcar, callback) {
    setTimeout( () => {
        cars.push(newcar);
        callback();
        
    }, 1000);

}


// call when required
//getCars();
createNewCars( {carname : 'KIA', price: 350000} , getCars);

// calling a simple API

