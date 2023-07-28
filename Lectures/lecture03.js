function counter() {
	alert('Ура, вы нажали');
}

function puzzle(question, answer) {
	const userAnswer = prompt(question, 'Ваш ответ');
	if (userAnswer.toLowerCase() == answer) {
		alert('Да ты молодец !');
	} else {
		alert('Увы, ошибочка вышла');
	}
}

puzzle('Сидит девица в темнице, а коса на улице', 'морковь');
puzzle('Два кольца, два конца, а посередине - гвоздик', 'ножницы');
