/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). 
*/

const anyNumber = Number(prompt('Введите число от 1 до 31', 'Вводить здесь'));

// Первый вариант
console.log(
	anyNumber == 31 ? '3 декада' : `${parseInt((anyNumber - 1) / 10 + 1)} декада`
);

// Второй вариант
switch (true) {
	case anyNumber >= 1 && anyNumber < 11: {
		console.log('1 декада');
		break;
	}
	case anyNumber >= 11 && anyNumber < 21: {
		console.log('2 декада');
		break;
	}
	default: {
		console.log('3 декада');
		break;
	}
}
