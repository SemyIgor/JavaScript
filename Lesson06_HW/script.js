task01();
// task02();
// task03();
// task04();

// ====================================================================
function task01() {
	/*    Задание 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени. 
*/
	const firstNumber = 2;
	const secondNumber = 3;

	const cube = (numberToCube) => Math.pow(numberToCube, 3);
	console.log(
		`${firstNumber}^3 + ${secondNumber}^3 = ${
			cube(firstNumber) + cube(secondNumber)
		}`
	);
}
// --------------------------------------------------------------------

// ====================================================================
function task02() {
	/*    Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно.
Создать фукнцию, которая высчитывает 13% от данного числа 
и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" 
*/

	const tax = (number) => number * 0.13;

	const enteredNumber = prompt('Введите размер Вашей зарплаты', 'Salary');
	if (isNaN(enteredNumber)) {
		console.log('Ошибка при вводе числа');
		return;
	}

	console.log(
		`Размер заработной платы за вычетом налогов равен ${
			enteredNumber - tax(enteredNumber)
		}`
	);
}
// --------------------------------------------------------------------

// ====================================================================
function task03() {
	/*    Задание 3
Пользователь с клавиатуры вводит 3 числа, 
необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

	const firstNumber = Number(prompt('Введите первое число', 'firstNumber'));
	const secondNumber = Number(prompt('Введите второе число', 'secondNumber'));
	const thirdNumber = Number(prompt('Введите третье число', 'thirdNumber'));

	const getMaxOfTwoNumbers = (first, second) => {
		return first >= second ? first : second;
	};
	function findMaxNumber(first, second, third) {
		return getMaxOfTwoNumbers(getMaxOfTwoNumbers(first, second), third);
	}

	console.log(
		`Максимальное число из ${firstNumber}, ${secondNumber} и ${thirdNumber} равно ${findMaxNumber(
			firstNumber,
			secondNumber,
			thirdNumber
		)}`
	);
}
// --------------------------------------------------------------------

// ====================================================================
function task04() {
	/*    Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа 
и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести 
число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. 
*/

	const sum = (first, second) => first + second;
	const subtract = (first, second) => Math.abs(first - second);
	const mul = (first, second) => first * second;
	const div = (first, second) => first / second;

	const firstNumber = Number(prompt('Введите первое число', 'firstNumber'));
	const secondNumber = Number(prompt('Введите второе число', 'secondNumber'));

	console.log(
		`Сумма введённых чисел ${firstNumber} и ${secondNumber} равна ${sum(
			firstNumber,
			secondNumber
		)}`
	);
	console.log(
		`Разность введённых чисел ${firstNumber} и ${secondNumber} равна ${subtract(
			firstNumber,
			secondNumber
		)}`
	);
	console.log(
		`Произведение введённых чисел ${firstNumber} и ${secondNumber} равно ${mul(
			firstNumber,
			secondNumber
		)}`
	);
	console.log(
		`Частное от деления введённых чисел ${firstNumber} и ${secondNumber} равно ${div(
			firstNumber,
			secondNumber
		)}`
	);
}
// --------------------------------------------------------------------
