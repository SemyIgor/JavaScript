// Задание №1
// ===========================================================
// Пример 1.
// const daysOfWeek = {
// 	1: 'понедельник',
// 	2: 'вторник',
// 	3: 'среда',
// 	4: 'четверг',
// 	5: 'пятница',
// 	6: 'суббота',
// 	7: 'воскресенье',
// };
// console.log('daysOfWeek: ', daysOfWeek);
// alert('Сегодня ' + daysOfWeek[2]);

// Пример 2.
// const user = {
// 	name: 'Alex',
// 	surname: 'Below',
// 	age: 36,
// };
// alert(user['name'] + user.surname + ' - ' + user.age);

/* // Пример 3 и 4.
const user = {
	name: 'Alex',
	surname: 'Below',
	age: 36,
};

// После отработки программы, первый вывод объекта в строку и развёрнутый с помощью стрелки отличаются. Выходит, что под стрелкой хранится актуальный на данный момент (момент просмотра консоли) объект
user.отчество = 'Петрович';
console.log(user);

delete user.surname;
console.log(user);

// ДЕСТРУКТУРИЗАЦИЯ, или более новое: деструктурирующее присавивание

// Двоеточие в следующей строке позволяет сохранять свойства объекта в
// переменные с именами, отличаюцимися от инени ключа свойства объекта
const { name: hisName, отчество: hisFatherName, age: hisAge } = user;
console.log('hisName: ', hisName);
console.log('hisFatherName: ', hisFatherName);
console.log('hisAge: ', hisAge); */
// --------------------------------------------------------------

// Задание №2
// ==============================================================
// Пример 1.
/* Даны два массива: первый с названиями дней недели,
 * а второй - с их порядковыми номерами:
 * const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
 * const arr2 = [1, 2, 3, 4, 5, 6, 7];
 * С помощью цикла создайте объект, ключами которого будут
 * названия дней, а значениями - их номера.
 */

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const result = {};

// for (let i = 0; i < 7; i++) {
// 	result[arr1[i]] = arr2[i];
// }
// console.log('result: ', result);

// Пример 2.
/*
 * const obj = {x: 1, y: 2, z: 3};
 * Переберите этот объект циклом и возведите каждый элемент
 * этого объекта в квадрат.
 */
// Вариант 1. (For in)
// const obj = { x: 1, y: 2, z: 3 };
// console.log('obj: ', obj);

// for (let key in obj) {
// 	obj[key] = Math.pow(obj[key], 2);
// }
// console.log('obj: ', obj);

// Вариант 2. (forEach)
// const obj = { x: 1, y: 2, z: 3 };
// console.log('obj: ', obj);

// Object.keys(obj).forEach((el) => {
// 	obj[el] = obj[el] ** 2;
// });
// console.log('Object.keys(obj): ', Object.keys(obj));
// console.log('obj: ', obj);

// Задание №3
// ====================================================
// Пример 1. Вариант 1. Вложенный цикл
/*
 * Найдите сумму элементов приведенного объекта.
 */
/*
 const obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
};

let sum = 0;
for (const item in obj) {
	for (const el in obj[item]) {
		console.log(obj[item][el]);
		sum += obj[item][el];
	}
}
console.log('sum: ', sum); 
*/
// Пример 1. Вариант 2. (concat, values, map)
/* const obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
};

const value = Object.values(obj);
console.log('value: ', value); */

/* Если использовать фигурные скобки для стрелочной функции, то
 * редактор добавляет точку с запятой перед закрывающейся фигурной скобкой,
 * и при запуске появляется undefined. Поэтому фигурные скобки не используем:
 */
// const arrayNumbers = [].concat(...value.map((el) => Object.values(el)));
// Здесь value перед map - это наша константа, а не метод value
// Получаем [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* Суммируем полученный массив чисел с помощью reduce
 * (здесь 0 - начальное значение суммы):
 */
// const sum = arrayNumbers.reduce((acc, elem) => acc + elem, 0);
// console.log('sum: ', sum);

// ----------------------------------------------------

// Задание №4
// ====================================================
// Пример 1.
/* 1. Создайте объект riddles 
 * 2. Добавьте свойства question, answers
 * 3. создайте метод askQuestion который спрашивает у пользователя 
вопрос question и сравнивает ответ с answers
 * 4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
 * 5. * По желанию, создать 2 подсказки, если пользователь ответил неверно 
 */

// Вариант 1. Использование объекта.

/* const riddles = {
	question: 'Зимой и летом одним цветом',
	answers: ['ёлочка', 'ёлка', 'елка', 'ель', 'елочка'],
	hints: ['зелёная', 'пришла к празднику', 'радость принесла'],
	askQuestion: function () {
		const userAnswer = prompt(this.question, 'Что это?');
		if (this.answers.some((item) => item === userAnswer.toLowerCase().trim()))
			return true;
		return false;
	},
	getRiddle: function (hints) {
		for (let i = 0; i <= hints.length; i++) {
			if (this.askQuestion()) {
				return true;
				// Проверяем, не закончились ли подсказки:
			} else if (hints[i]) {
				console.log(`Подсказка: ${hints[i]}`);
			}
		}
		return false;
	},
};

console.log(
	riddles.getRiddle(riddles.hints)
		? `Ответ правильный! Это ${riddles.answers[0]}`
		: 'Ну ты и балбес!'
); */

// Вариант 2. Использование конструктора классов
// ----------------------------------------------------
class Riddles {
	constructor(question, answers, hints) {
		this.question = question;
		this.answers = answers;
		this.hints = hints;
	}

	askQuestion() {
		const userAnswer = prompt(this.question, 'Что это?');
		if (this.answers.some((item) => item === userAnswer.toLowerCase().trim()))
			return true;
		return false;
	}

	getRiddle(hints) {
		for (let i = 0; i <= hints.length; i++) {
			if (this.askQuestion()) {
				return true;
				// Проверяем, не закончились ли подсказки:
			} else if (hints[i]) {
				console.log(`Подсказка: ${hints[i]}`);
			}
		}
		return false;
	}
}

let question = 'Зимой и летом одним цветом';
let answers = ['ёлочка', 'ёлка', 'елка', 'ель', 'елочка'];
let hints = ['зелёная', 'пришла к празднику', 'радость принесла'];

const riddle = new Riddles(question, answers, hints);

console.log(
	riddle.getRiddle(hints)
		? `Ответ правильный! Это ${answers[0]}`
		: 'Ну ты и балбес!'
);
