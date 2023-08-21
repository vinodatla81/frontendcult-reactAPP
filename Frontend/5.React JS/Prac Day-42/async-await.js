const cars = [
    {carname : 'Audi', price: 350000},
    {carname : 'BMW', price: 400000},
    {carname : 'WV', price: 230000}
];

// function

function getCars() {
    setTimeout( () => {
        cars.forEach( (car) => {
            console.log(car.carname)
        });
    }, 1000); 
}
// Promise

const prom1 = new Promise ( (Resolve, Reject) => {});

const prom2 = new Promise ( (Resolve, Reject) => {});


function createnewCar(car) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            cars.push(car); // in realtime line:30 will call or will use API.

            const error = false // error ledanukunte
            if(!error) {
                resolve('New car inserted successfully'); // ReactJS lo line:32 to 37 will replace with API
            } else {
                reject('something went wrong');
            }

        }, 2000)

    })

}

async function myfun() {
    await createnewCar( {carname : 'KIA', price: 87777});
    getCars();
}
myfun();