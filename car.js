const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
   ' passenger capacity': {
    seat: 50,
    womenSeat: 10,
    rent: '150tk',
    otherSeat: 40,
    color: 'blue'
   }
};
console.log(car[' passenger capacity']);
const key= Object.keys(car)
console.log(key);
