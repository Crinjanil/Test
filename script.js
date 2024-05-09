let questions = [
	{
		// 1
		question: 'Какой язык работает в браузере?',
		answers: ['Java', 'C', 'Python', 'JavaScript'],
		correct: 4,
		rAnswer: 'JavaScript',
	},
	{
		// 2
		question: 'Как расшифровывается CSS?',
		answers: [
			'Central Style Sheets',
			'Cascading Style Sheets',
			'Cascading Simple Sheets',
			'Cars SUVs Sailboats',
		],
		correct: 2,
		rAnswer: 'Cascading Style Sheets',
	},
	{
		// 3
		question: 'Как расшифровывается HTML?',
		answers: [
			'Hyper Text Makeup Language',
			'Hyper Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinks and Text Markup Language',
		],
		correct: 2,
		rAnswer: 'Hyper Text Markup Language',
	},
	{
		// 4
		question: 'Какой атрибут используется для указания альтернативного текста для изображения?',
		answers: ['src', 'alt', 'title', 'longdesc'],
		correct: 2,
		rAnswer: 'alt',
	},
	{
		// 5
		question: 'Какой атрибут используется для указания типа поля ввода?',
		answers: ['value', 'type', 'name', 'id'],
		correct: 2,
		rAnswer: 'type',
	},
	{
		// 6
		question: 'Какой тег используется для создания заголовка первого уровня?',
		answers: ['heading', 'h1', 'head', 'header'],
		correct: 2,
		rAnswer: 'h1',
	},
	{
		// 7
		question: 'Какой тег создает параграф?',
		answers: ['paragraph', 'p', 'text', 'span'],
		correct: 2,
		rAnswer: 'p',
	},
	{
		// 8
		question: 'Как создать ссылку на другую веб-страницу?',
		answers: ['link', 'a href="..."', 'navigate', 'go'],
		correct: 2,
		rAnswer: 'a href="..."',
	},
	{
		// 9
		question: 'Какой атрибут используется для добавления изображения?',
		answers: ['src', 'alt', 'href', 'title'],
		correct: 1,
		rAnswer: 'src',
	},
	{
		//10
		question: 'Какой тег используется для создания таблицы?',
		answers: ['row', 'grid', 'table', 'column'],
		correct: 3,
		rAnswer: 'table',
	},
	{
		// 11
		question: 'Какой атрибут используется для установки идентификатора элемента?',
		answers: ['class', 'id', 'name', 'identify'],
		correct: 2,
		rAnswer: 'id',
	},
	{
		// 12
		question: 'Как изменить цвет текста?',
		answers: ['text-color', 'color', 'font-color', 'text'],
		correct: 2,
		rAnswer: 'color',
	},
	{
		// 13
		question: 'Как изменить размер шрифта?',
		answers: ['font-size', 'text-size', 'size', 'font'],
		correct: 1,
		rAnswer: 'font-size',
	},
	{
		// 14
		question: 'Как установить фоновое изображение?',
		answers: ['background-image', 'image', 'background', 'wallpaper'],
		correct: 1,
		rAnswer: 'background-image',
	},
	{
		// 15
		question: 'Какой селектор используется для выбора элемента по идентификатору?',
		answers: ['.', '@', '*', '#'],
		correct: 4,
		rAnswer: '#',
	},
	{
		// 16
		question: 'Как установить внутренний отступ?',
		answers: ['border', 'margin', 'padding', 'spacing'],
		correct: 3,
		rAnswer: 'padding',
	},
	{
		// 17
		question: 'Как объявить переменную?',
		answers: ['var', 'let', 'const', 'Все вышеперечисленные'],
		correct: 4,
		rAnswer: 'Все вышеперечисленные',
	},
	{
		// 18
		question: 'Какой тип данных используется для хранения текста?',
		answers: ['number', 'string', 'boolean', 'array'],
		correct: 2,
		rAnswer: 'string',
	},
	{
		// 19
		question: 'Как создать функцию?',
		answers: [
			'function имяФункции() {}',
			'create function() {}',
			'function = () => {}',
			'def function() {}',
		],
		correct: 1,
		rAnswer: 'function имяФункции() {}',
	},
	{
		// 20
		question: 'Как вывести сообщение в консоль?',
		answers: ['print()', 'debug()', 'output()', 'console.log()'],
		correct: 4,
		rAnswer: 'console.log()',
	},
	{
		// 21
		question: 'Как добавить JavaScript-код в HTML-документ?',
		answers: ['script.../script', 'js.../js', 'javascript.../javascript', 'java.../java'],
		correct: 1,
		rAnswer: 'script.../script',
	},
	{
		// 22
		question: 'Какой тег используется для создания разделов на странице?',
		answers: ['div', 'section', 'article', 'Все перечисленные'],
		correct: 4,
		rAnswer: 'Все перечисленные',
	},
	{
		// 23
		question: 'Как создать выпадающий список?',
		answers: ['dropdown', 'input type="list"', 'select>option.../option/select', 'list'],
		correct: 3,
		rAnswer: 'select>option.../option/select',
	},
	{
		// 24
		question: 'Какой тег используется для создания кнопки?',
		answers: ['click', 'input type="button"', 'submit', 'button'],
		correct: 4,
		rAnswer: 'button',
	},
	{
		// 25
		question: 'Какой тег используется для определения метаданных документа?',
		answers: ['title', 'head', 'meta', 'data'],
		correct: 3,
		rAnswer: 'meta',
	},
	{
		//26
		question: 'Как создать маркированный список?',
		answers: ['ol', 'ul', 'list', 'dl'],
		correct: 2,
		rAnswer: 'ul',
	},
	{
		//27
		question: 'Какой тег используется для создания формы?',
		answers: ['form', 'input', 'button', 'label'],
		correct: 1,
		rAnswer: 'form',
	},
	{
		// 28
		question: 'Как создать цикл, который выполняется 10 раз?',
		answers: [
			'for (let i = 0; i < 10; i++) {}',
			'while (i < 10) {}',
			'do {} while (i < 10);',
			'Все вышеперечисленные',
		],
		correct: 4,
		rAnswer: 'Все вышеперечисленные',
	},
	{
		// 29
		question: 'Как создать массив, содержащий элементы "apple", "banana", "orange"?',
		answers: [
			'let fruits = ["apple", "banana", "orange"];',
			'let fruits = array("apple", "banana", "orange");',
			'let fruits = {"apple", "banana", "orange"};',
			'let fruits = ("apple", "banana", "orange");',
		],
		correct: 1,
		rAnswer: 'let fruits = ["apple", "banana", "orange"];',
	},
	{
		// 30
		question: 'Как удалить последний элемент из массива?',
		answers: ['array.slice()', 'array.shift()', 'array.pop()', 'array.splice()'],
		correct: 3,
		rAnswer: 'array.pop()',
	},
	{
		// 31
		question: 'Как добавить новый элемент в начало массива?',
		answers: ['array.push()', 'array.unshift()', 'array.add()', 'array.insert()'],
		correct: 2,
		rAnswer: 'array.unshift()',
	},
	{
		// 32
		question: 'Как преобразовать строку в число?',
		answers: ['parseInt()', 'Number()', 'parseFloat()', 'Все вышеперечисленные'],
		correct: 4,
		rAnswer: 'Все вышеперечисленные',
	},
	{
		// 33
		question: 'Что такое переменная?',
		answers: ['Контейнер для хранения данных', 'Тип данных', 'Функция', 'Цикл'],
		correct: 1,
		rAnswer: 'Контейнер для хранения данных',
	},
	{
		// 34
		question: 'Какой оператор используется для сравнения двух значений не учитывая их типы?',
		answers: ['=', '==', '===', '!='],
		correct: 2,
		rAnswer: '==',
	},
	{
		// 35
		question: 'Как создать условный оператор?',
		answers: ['if', 'else', 'switch', 'Все вышеперечисленные'],
		correct: 4,
		rAnswer: 'Все вышеперечисленные',
	},
	{
		// 36
		question: 'Как вызвать функцию?',
		answers: ['run function()', 'call function()', 'имяФункции()', 'start function()'],
		correct: 3,
		rAnswer: 'имяФункции()',
	},
	{
		//37
		question: 'Как получить доступ к элементу массива?',
		answers: ['array.element(index)', 'array.get(index)', 'array[index]', 'array.at(index)'],
		correct: 3,
		rAnswer: 'array[index]',
	},
	{
		//38
		question: 'Какой тип цикла используется для повторения кода определенное количество раз?',
		answers: ['for', 'while', 'do-while', 'Все вышеперечисленные'],
		correct: 1,
		rAnswer: 'for',
	},
	{
		//39
		question: 'Какой тип цикла используется для повторения кода, пока условие истинно?',
		answers: ['for', 'while', 'do-while', 'Все вышеперечисленные'],
		correct: 2,
		rAnswer: 'while',
	},
	{
		// 40
		question: 'Как создать объект?',
		answers: ['()', '[]', '{}', '<>'],
		correct: 3,
		rAnswer: '{}',
	},
	{
		// 41
		question: 'Что такое DOM?',
		answers: ['Структура HTML-документа', 'Язык программирования', 'Тип данных', 'Функция'],
		correct: 1,
		rAnswer: 'Структура HTML-документа',
	},
	{
		// 42
		question: 'Как изменить содержимое HTML-элемента?',
		answers: [
			'element.innerHTML = newContent',
			'element.text = newContent',
			'element.innerText = newContent',
			'Все вышеперечисленные',
		],
		correct: 4,
		rAnswer: 'Все вышеперечисленные',
	},
	{
		// 43
		question: 'Как создать событие клика по кнопке?',
		answers: [
			'button.onClick = function() {}',
			'button.on("click", function() {})',
			'button.addEventListener("click", function() {})',
			'Все вышеперечисленные',
		],
		correct: 3,
		rAnswer: 'button.addEventListener("click", function() {})',
	},
	{
		// 44
		question: 'Какой тип данных используется для хранения чисел?',
		answers: ['array', 'string', 'boolean', 'number'],
		correct: 4,
		rAnswer: 'number',
	},
	{
		//45
		question: 'Какой тип данных используется для хранения логических значений?',
		answers: ['number', 'string', 'boolean', 'array'],
		correct: 3,
		rAnswer: 'boolean',
	},
	{
		//46
		question: 'Что такое консоль разработчика?',
		answers: [
			'Текстовый редактор',
			'Инструмент для отладки кода',
			'Браузер',
			'Операционная система',
		],
		correct: 2,
		rAnswer: 'Инструмент для отладки кода',
	},
	{
		//47
		question: 'Что такое отладка?',
		answers: [
			'Процесс поиска и исправления ошибок',
			'Процесс написания кода',
			'Процесс запуска кода',
			'Процесс тестирования кода',
		],
		correct: 1,
		rAnswer: 'Процесс поиска и исправления ошибок',
	},
	{
		//48
		question: 'Что такое console.log()?',
		answers: [
			'Функция для вывода сообщений в консоль',
			'Функция для чтения данных из консоли',
			'Функция для очистки консоли',
			'Функция для закрытия консоли',
		],
		correct: 1,
		rAnswer: 'Функция для вывода сообщений в консоль',
	},
	{
		// 49
		question: 'Как остановить цикл?',
		answers: ['exit', 'stop', 'break', 'end'],
		correct: 3,
		rAnswer: 'break',
	},
	{
		//50
		question: 'Что такое оператор?',
		answers: ['Символ, выполняющий действие', 'Тип данных', 'Переменная', 'Функция'],
		correct: 1,
		rAnswer: 'Символ, выполняющий действие',
	},
	{
		// 51
		question: 'Какой оператор используется для вычитания?',
		answers: ['+', '-', '*', '/'],
		correct: 2,
		rAnswer: '-',
	},
	{
		//52
		question: 'Какой оператор используется для деления?',
		answers: ['+', '-', '*', '/'],
		correct: 4,
		rAnswer: '/',
	},
	{
		// 53
		question: 'Что такое строка?',
		answers: ['Переменная', 'Тип данных', 'Последовательность символов', 'Функция'],
		correct: 3,
		rAnswer: 'Последовательность символов',
	},
	{
		// 54
		question: 'Как объединить две строки?',
		answers: ['+', '-', '*', '/'],
		correct: 1,
		rAnswer: '+',
	},
	{
		// 55
		question: 'Как получить длину строки?',
		answers: ['string.len', 'string.size', 'string.count', 'string.length'],
		correct: 4,
		rAnswer: 'string.length',
	},
	{
		// 56
		question: 'Как преобразовать строку в верхний регистр?',
		answers: ['string.upper', 'string.toUpper', 'string.toUpperCase()', 'string.uppercase'],
		correct: 3,
		rAnswer: 'string.toUpperCase()',
	},
	{
		// 57
		question: 'Как преобразовать строку в нижний регистр?',
		answers: ['string.lowercase', 'string.toLower', 'string.lower', 'string.toLowerCase()'],
		correct: 4,
		rAnswer: 'string.toLowerCase()',
	},
	{
		// 58
		question: 'Как заменить часть строки?',
		answers: ['string.change()', 'string.replace()', 'string.substitute()', 'string.swap()'],
		correct: 2,
		rAnswer: 'string.replace()',
	},
	{
		// 59
		question: 'Как написать стрелочную функцию?',
		answers: ['=> {}', 'function() {}', '() => {}', '-> {}'],
		correct: 3,
		rAnswer: '() => {}',
	},
	{
		//60
		question: 'Как подключить CSS-файл к HTML-документу?',
		answers: ['style', 'link', 'script', 'import'],
		correct: 2,
		rAnswer: 'link',
	},
	{
		//61
		question: 'Как задать выравнивание текста в CSS?',
		answers: ['color', 'background-color', 'font-size', 'text-align'],
		correct: 4,
		rAnswer: 'text-align',
	},
	{
		//62
		question: 'Как задать цвет фона в CSS?',
		answers: ['color', 'background-color', 'font-size', 'text-align'],
		correct: 2,
		rAnswer: 'background-color',
	},
	{
		// 63
		question: 'Как задать внешний отступ',
		answers: ['margin', 'padding', 'border', 'width'],
		correct: 1,
		rAnswer: 'margin',
	},
	{
		//64
		question: 'Как задать рамку в CSS?',
		answers: ['margin', 'padding', 'border', 'width'],
		correct: 3,
		rAnswer: 'border',
	},
	{
		//65
		question: 'Как задать ширину элемента в CSS?',
		answers: ['margin', 'padding', 'border', 'width'],
		correct: 4,
		rAnswer: 'width',
	},
	{
		//66
		question: 'Как задать высоту элемента в CSS?',
		answers: ['margin', 'padding', 'border', 'height'],
		correct: 4,
		rAnswer: 'height',
	},
	{
		//67
		question: 'Как выбрать элемент по ID?',
		answers: ['#id', '.id', 'id', '*id'],
		correct: 1,
		rAnswer: '#id',
	},
	{
		//68
		question: 'Как выбрать элемент по классу?',
		answers: ['#class', '.class', 'class', '*class'],
		correct: 2,
		rAnswer: '.class',
	},
	{
		//69
		question: 'Как выбрать все элементы?',
		answers: ['#', '.', '*', 'all'],
		correct: 3,
		rAnswer: '*',
	},
	{
		//70
		question: 'Как выбрать дочерние элементы?',
		answers: ['>', '+', '~', '<'],
		correct: 1,
		rAnswer: '>',
	},
	{
		//71
		question: 'Как выбрать соседние элементы?',
		answers: ['>', '+', '~', '<'],
		correct: 2,
		rAnswer: '+',
	},
	{
		//72
		question: 'Как выбрать все последующие элементы?',
		answers: ['>', '+', '~', '<'],
		correct: 3,
		rAnswer: '~',
	},
	{
		//73
		question: 'Как выбрать элемент при наведении?',
		answers: [':hover', ':active', ':focus', ':visited'],
		correct: 1,
		rAnswer: ':hover',
	},
	{
		//74
		question: 'Как выбрать активный элемент?',
		answers: [':hover', ':active', ':focus', ':visited'],
		correct: 2,
		rAnswer: ':active',
	},
	{
		//75
		question: 'Как выбрать элемент в фокусе?',
		answers: [':hover', ':active', ':focus', ':visited'],
		correct: 3,
		rAnswer: ':focus',
	},
]

function shuffleQuestions(questions) {
	for (let i = questions.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		;[questions[i], questions[j]] = [questions[j], questions[i]]
	}
	return questions
}

questions = shuffleQuestions(questions)

let score = 0
let questionIndex = 0
let paginationNumber = 1
let right = '<p>Верно</p>'

const header = document.querySelector('.header')
const list = document.querySelector('.test-list')
const btn = document.querySelector('.submit-button')
const pagination = document.querySelector('.pagination-number')
const fullPagination = document.querySelector('.pagination')
const rightAnswer = document.querySelector('.right')

clearPage()
showQuestion()
btn.onclick = checkAnswer

function clearPage() {
	header.innerHTML = ''
	list.innerHTML = ''
}

function showQuestion() {
	const headerTemplate = '<h1>%title%</h1>'
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
	header.innerHTML = title
	let answerNumber = 1
	for (answerText of questions[questionIndex]['answers']) {
		const answerTemplate = `<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            %answer%
          </label>
        </li>`
		const answerHTML = answerTemplate
			.replace('%answer%', answerText)
			.replace('%number%', answerNumber)
		list.innerHTML += answerHTML
		answerNumber++
	}

	const paginationTemplate = '<span class="pagination-number">%pag%</span>'
	const pagHTML = paginationTemplate.replace('%pag%', paginationNumber)
	pagination.innerHTML = pagHTML
}

function checkAnswer() {
	const checkedRadio = list.querySelector('input:checked')

	if (!checkedRadio) {
		return
	}

	paginationNumber++

	const userAnswer = Number(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++
		rightAnswer.innerHTML = right
	} else {
		const wrongTemplate = '<span>Неправильно, Правильный ответ - %wrong%</span>'
		const wrongHTML = wrongTemplate.replace('%wrong%', questions[questionIndex]['rAnswer'])
		rightAnswer.innerHTML = wrongHTML
	}

	if (questionIndex !== questions.length - 1) {
		questionIndex++
		clearPage()
		showQuestion()
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	const resultsTemplate = `
  <h1>%title%</h1>
  <h2>%message%</h2>
  <p class = "result">%result%</p>
  `

	let title, message
	if (score === questions.length) {
		title = 'Поздравляем!'
		message = 'Вы ответили правильно на все вопросы!'
	} else if ((score * 100) / questions.length >= 50) {
		title = 'Хороший результат!'
		message = 'Вы ответили правильно на более чем половину вопросов'
	} else {
		title = 'Ну чот ты тупенький'
		message = 'Вы ответили правильно на мене чем половину вопросов'
	}

	let result = `${score} из ${questions.length}`
	const final = resultsTemplate
		.replace('%title%', title)
		.replace('%message%', message)
		.replace('%result%', result)
	header.innerHTML = final

	rightAnswer.innerHTML = ''
	fullPagination.innerHTML = ''
	btn.innerHTML = 'Начать заново!'
	btn.onclick = () => {
		history.go()
	}
}
