// promise -> Resolve or Reject
// Handle the data Response/Resolve -> Then ()
// Handle The Error        -> Catch()
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

function createnewCar(car) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            cars.push(car); // in realtime will use or will call API

            const error = false;

            if(!error) {
                resolve('New car inserted successfully');                
            } else {
                reject('something went wrong');
            }
        }, 2000)

    });
}

// Promise

const prom1 = new Promise ( (Resolve, Reject) => {});
const prom2 = new Promise ( (Resolve, Reject) => {});

createnewCar( {carname : 'KIA', price: 87777} )
.then ( getCars)
.catch( err => console.log(err))




