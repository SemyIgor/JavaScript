// Явное приведение к числу:
// const yourAge = Number(prompt('Сколько Вам лет?', 'Введите число'));
// console.log(`yourAge: ${yourAge}; 'Type: ', ${typeof yourAge}`); // Вводим "пять", получаем: yourAge: NaN; 'Type: ', number
// console.log(`yourAge: ${yourAge}; 'Type: ', ${typeof yourAge}`); // Вводим 5, получаем: yourAge: 5; 'Type: ', number

// Для явного приведения к числу можно использовать унарный + перед выражением:
// const yourAge = +prompt('Сколько Вам лет?', 'Введите число');
// Результат будет такой же:
// console.log(`yourAge: ${yourAge}; 'Type: ', ${typeof yourAge}`); // Вводим "пять", получаем: yourAge: NaN; 'Type: ', number
// console.log(`yourAge: ${yourAge}; 'Type: ', ${typeof yourAge}`); // Вводим 5, получаем: yourAge: 5; 'Type: ', number

// Для явного приведения к строке используем String:
// const yourName = String(prompt('Как Вас зовут?', 'Введите Ваше имя'));
// console.log(`yourName: ${yourName}; 'Type: ', ${typeof yourName}`); // При вводе 5 получим: yourName: 5; 'Type: ', string

// Урок 4 (Семинар 2)
// Задание 3, Пример 3
// ===================================================================
// const firstNumber = +prompt('Введите первое число', 'введите число');
// console.log('firstNumber: ', firstNumber);
// const secondNumber = +prompt('Введите второе число', 'введите число');
// console.log('secondNumber: ', secondNumber);

// alert(`Сумма чисел равна ${firstNumber + secondNumber}`);
// alert(`Разность чисел равна ${firstNumber - secondNumber}`);
// alert(`Произведение чисел равно ${firstNumber * secondNumber}`);
// alert(`Частное от деления чисел равно ${firstNumber / secondNumber}`);
// alert(`Остаток от деления чисел равен ${firstNumber % secondNumber}`);

// console.log(`Сумма чисел равна ${firstNumber + secondNumber}`);
// console.log(`Разность чисел равна ${firstNumber - secondNumber}`);
// console.log(`Произведение чисел равно ${firstNumber * secondNumber}`);
// console.log(`Частное от деления чисел равно ${firstNumber / secondNumber}`);
// console.log(`Остаток от деления чисел равен ${firstNumber % secondNumber}`);
// -------------------------------------------------------------------

// Урок 4 (Семинар 2)
// Задание 5, Пример 2
// ===================================================================
// const firstNumber = +prompt('Введите первое число', 'введите число');
// console.log('test1: ', firstNumber);
// const secondNumber = +prompt('Введите второе число', 'введите число');
// console.log('test2: ', secondNumber);

// if (firstNumber < secondNumber) {
// 	result = 'меньше test2';
// } else if (firstNumber > secondNumber) {
// 	result = 'больше test2';
// } else {
// 	result = 'равно test2';
// }

// console.log(`test1 ${result}`);
// -------------------------------------------------------------------

// Урок 4 (Семинар 2)
// Задание 5, Пример 3
// ===================================================================
// let min;

// const firstNumber = +prompt('Введите первое число', 'введите число');
// console.log('test1: ', firstNumber);
// const secondNumber = +prompt('Введите второе число', 'введите число');
// console.log('test2: ', secondNumber);

// if (firstNumber < secondNumber) {
// 	min = firstNumber;
// } else {
// 	min = secondNumber;
// }
// console.log(`Минимальное число равно ${min}`);
// -------------------------------------------------------------------

// Урок 4 (Семинар 2)
// Задание 5, Пример 4
// ===================================================================
// const firstNumber = +prompt('Введите число', 'введите число');
// if (firstNumber > 0 && firstNumber < 15) {
// 	console.log('Число подходит');
// } else {
// 	console.log('Число не подходит');
// }
// -------------------------------------------------------------------

// Использование switch-case
// ====================================================================
// const firstNumber = +prompt('Введите первое число', 'введите число');
// const secondNumber = +prompt('Введите второе число', 'введите число');

// switch (true) {
// 	case firstNumber < secondNumber: {
// 		console.log(
// 			`Первое число (${firstNumber}) меньше второго (${secondNumber})`
// 		);
// 		break;
// 	}
// 	case firstNumber > secondNumber: {
// 		console.log(
// 			`Первое число (${firstNumber}) больше второго (${secondNumber})`
// 		);
// 		break;
// 	}
// 	default: {
// 		console.log(
// 			`Первое число (${firstNumber}) равно второму (${secondNumber})`
// 		);
// 		break;
// 	}
// }
// -------------------------------------------------------------------

// Использование тернарного оператора
// ====================================================================
// const firstNumber = +prompt('Введите число', 'введите число');
// console.log(
// 	firstNumber > 5
// 		? `Число ${firstNumber} больше 5`
// 		: firstNumber < 5
// 		? `Число ${firstNumber} меньше 5`
// 		: `Число ${firstNumber} равно 5`
// );
// -------------------------------------------------------------------

// parseInt не только преобразует строку в число, но и округляет её до целого
// let a = '15.346';
// console.log('a: ', parseInt(a));

// parseFloat фиксируется на начало строки, и если это число, то он отбрасывает всё, что идёт за ним, возвращая только число. Если же сначала не число, а другие символы, то выдаёт NaN.
// let a = '15.346 другие символы';
// console.log('a: ', parseFloat(a));

// toFixed
// let a = 15.3456789012;
// console.log(a.toFixed(4)); // 15.3457
// console.log(typeof a.toFixed(4)); // string
// console.log();

console.log('\ud83d\udc99'); // 💙
alert('\ud83d\udc99'); // 💙
