task01();
// task02();
// task03();
// task04();
// task05();

function task01() {
	/*    Задание 1
 * Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

 * const numbers = {
 * keyin1: 1,
 * keyin2: 2,
 * keyin3: 3,
 * keyin4: 4,
 * keyin5: 5,
 * keyin6: 6,
 * keyin7: 7,
 * } 
*/

	const numbers = {
		keyin1: 1,
		keyin2: 2,
		keyin3: 3,
		keyin4: 4,
		keyin5: 5,
		keyin6: 6,
		keyin7: 7,
	};

	const threeOrMoreArray = Object.values(numbers).filter((el) => {
		return el >= 3;
	});
	console.log('threeOrMoreArray: ', threeOrMoreArray);
}

function task02() {
	/*    Задание 2
	 * Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
	 */
	const post = {
		author: 'John', // вывести этот текст
		postId: 23,
		comments: [
			{
				userId: 10,
				userName: 'Alex',
				text: 'lorem ipsum',
				rating: {
					likes: 10,
					dislikes: 2, // вывести это число
				},
			},
			{
				userId: 5, // вывести это число
				userName: 'Jane',
				text: 'lorem ipsum 2', // вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1,
				},
			},
		],
	};
	console.log('author: ', post['author']);
	console.log('dislikes: ', post['comments'][0]['rating']['dislikes']);
	console.log('userId: ', post['comments'][1]['userId']);
	console.log('text: ', post['comments'][1]['text']);
}

function task03() {
	/*    Задание 3
	 * Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
	 */

	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];

	Object.keys(products).forEach((key) => {
		products[key]['price'] *= 0.85;
	});

	console.log(products);
}

function task04() {
	/*    Задание 4
	 * 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография
	 * используя метод filter. Исходные данные - массив products.
	 * 2. Необходимо отсортировать массив products используя метод sort по цене,
	 * начиная с самой маленькой, заканчивая самой большой ценой,
	 * после чего вывести отсортированный массив в консоль.
	 */

	const products = [
		{
			id: 3,
			price: 127,
			photos: ['1.jpg', '2.jpg'],
		},
		{
			id: 5,
			price: 499,
			photos: [],
		},
		{
			id: 10,
			price: 26,
			photos: ['3.jpg'],
		},
		{
			id: 8,
			price: 78,
		},
	];

	const hasPhotos = products.filter((el) => {
		return el['photos'] !== undefined && el['photos'].length !== 0;
	});

	const sortedByPrice = products.sort((a, b) => {
		if (a['price'] > b['price']) {
			return 1;
		} else if (a['price'] < b['price']) {
			return -1;
		} else {
			return 0;
		}
	});

	console.log('hasPhotos: ', hasPhotos);
	console.log('sortedByPrice: ', sortedByPrice);
}

function task05() {
	/*    Задание 5
	 * Дано 2 массива
	 * const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
	 * const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
	 *
	 * Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
	 */

	const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	const ru = [
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
		'воскресенье',
	];

	// Если мы хотим получить объект, содержащий пары ключ:значение
	function twoArraysToObject(arr1, arr2) {
		const obj = {};
		for (let i = 0; i < arr1.length; i++) {
			obj[arr1[i]] = arr2[i];
		}
		return obj;
	}

	// Если мы хотим получить массив объектов ключ:значение
	function twoArraysToArrOfObjects(arr1, arr2) {
		const arr = [];
		for (let i = 0; i < arr1.length; i++) {
			arr.push({ [arr1[i]]: arr2[i] });
		}
		return arr;
	}
	console.log('obj: ', twoArraysToObject(en, ru));

	console.log('array: ', twoArraysToArrOfObjects(en, ru));
}
