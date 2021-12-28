const
	rockBtn = document.querySelector('#rockBtn'),
	paperBtn = document.querySelector('#paperBtn'),
	scissorsBtn = document.querySelector('#scissorsBtn'),
	buttons = document.querySelectorAll('.button'),
	meImg = document.querySelector('.me__img'),
	compImg = document.querySelector('.comp__img'),
	meScoreSelector = document.querySelector('.me__score'),
	compScoreSelector = document.querySelector('.comp__score');

let
	compNum,
	meScore = 0,
	compScore = 0,
	result,
	randomNumbers = {
		0: 'img/rock.png',
		1: 'img/paper.png',
		2: 'img/scissors.png'
	};

function animation(selector) {
	selector.classList.add('fade');
}

function setMyImg(src) {
	setTimeout(() => {
		meImg.setAttribute('src', src);
		meImg.classList.remove('fade');
		if (result == 'Вы проиграли') {
			compScore += 1;
			compScoreSelector.innerHTML = `${compScore}`;
		} else if (result == 'Вы выиграли') {
			meScore += 1;
			meScoreSelector.innerHTML = `${meScore}`;
		}
	}, 2000);
}

function setCompImg(src) {
	setTimeout(() => {
		compImg.setAttribute('src', src);
		compImg.classList.remove('fade');
	}, 2000);
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function prepare() {
	compNum = getRandomInt(0, 3);
	animation(meImg);
	animation(compImg);
	setCompImg(randomNumbers[compNum]);
	console.log(randomNumbers[compNum]);
}

rockBtn.addEventListener('click', () => {
	prepare();
	setMyImg('img/rock.png');
	if (compNum == 0) {
		result = 'Ничья';
	} else if (compNum == 1) {
		result = 'Вы проиграли';
	} else {
		result = 'Вы выиграли';

	}
});

paperBtn.addEventListener('click', () => {
	prepare();
	setMyImg('img/paper.png');
	if (compNum == 0) {
		result = 'Вы выиграли';
	} else if (compNum == 1) {
		result = 'Ничья';
	} else {
		result = 'Вы проиграли';
	}
});

scissorsBtn.addEventListener('click', () => {
	prepare();
	setMyImg('img/scissors.png');
	if (compNum == 0) {
		result = 'Вы проиграли';
	} else if (compNum == 1) {
		result = 'Вы выиграли';
	} else {
		result = 'Ничья';
	}
});
