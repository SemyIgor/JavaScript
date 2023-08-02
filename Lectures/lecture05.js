const car = {
	model: 'audi',
	color: 'black',
	maxSpeed: 210,
	price: 800000,
	photo: 'audiphoto.jpg',
};
console.log('car: ', car);

for (const key in car) {
	console.log(`${key}: ${car[key]}`);
}

// Object.keys(car);
console.log('Object.keys(car): ', Object.keys(car));

// Object.values(car);
console.log('Object.values(car): ', Object.values(car));

Object.entries(car);
console.log('Object.entries(car): ', Object.entries(car));
