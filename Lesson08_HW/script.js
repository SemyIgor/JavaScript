task01();
// task02();
// task03();
// task04();

function task01() {
	/*    Задание 1
	 * Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
	 * 0 – это ноль
	 * 1 – нечетное число
	 * 2 – четное число
	 * 3 – нечетное число
	 * …
	 * 10 – четное число
	 */

	console.log('0 – это ноль');
	for (let i = 1; i < 11; i = i + 2) {
		console.log(`${i} - нечётное число`);
		console.log(`${i + 1} - чётное число`);
	}
}

function task02() {
	/*    Задание 2
	 * Дан массив [1, 2, 3, 4, 5, 6, 7]
	 * Сделайте из этого массива следующий [1, 2, 3, 6, 7]
	 */

	const arr = [1, 2, 3, 4, 5, 6, 7];
	console.log('Исходный массив:');
	console.log(arr);

	const newArr = arr.slice(0, 3).concat(arr.slice(5));
	console.log('Новый массив:');
	console.log(newArr);
}

function task03() {
	/*    Задание 3
	 * Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив,
	 * состоящий из 5 таких элементов
	 * 1. Рассчитать сумму элементов этого массива
	 * 2. Найти минимальное число
	 * 3. Найти есть ли в этом массиве число 3 */

	// Генерируем псевдослучайтое число
	const randomGenerator = (baseNumber) =>
		Math.floor(Math.random() * baseNumber);

	let sum = 0;
	const maxArrayElementLimit = 10;
	const searchedNumber = 3;
	const arraySize = 5;
	let isSearchedNumber = false;
	let array = [];
	let min = maxArrayElementLimit;

	for (let i = 0; i < arraySize; i++) {
		array.push(randomGenerator(maxArrayElementLimit));
		sum = sum + array[i];
		min = min <= array[i] ? min : array[i];
		if (array[i] === searchedNumber) isSearchedNumber = true;
		console.log('i: ', i, '\t', `array[${i}]:`, array[i], '\t', 'sum: ', sum);
	}

	console.log(
		isSearchedNumber
			? `В полученном массиве есть число ${searchedNumber}`
			: `В полученном массиве нет числа ${searchedNumber}`
	);

	console.log(`Минимальное число массива равно ${min}`);
}

function task04() {
	/*    *Необязательное задание. *
	 * Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
	 * только у вашей горки должно быть 20 рядов, а не 5:
	 *
	 * x
	 * xx
	 * xxx
	 * xxxx
	 * xxxxx
	 */

	arr = [];
	const numberOfRows = 20;
	for (let i = 0; i < numberOfRows; i++) {
		arr.push('x');
		console.log(`${i + 1} \t ${arr.join('')}`);
	}
}
