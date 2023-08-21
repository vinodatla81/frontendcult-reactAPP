const cars = [                          // async and await we use small in realtime
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

    }, 400);                                     // async and await we use small in realtime

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

    async function myfun() {
       await  createnewCar( {carname : 'KIA', price: 87777} );
       getCars();
    }
    myfun();
