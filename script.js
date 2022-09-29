const
	buttons = document.querySelectorAll('.button'),
	meImg = document.querySelector('.me__img'),
	compImg = document.querySelector('.comp__img'),
	meScoreSelector = document.querySelector('.me__score'),
	compScoreSelector = document.querySelector('.comp__score'),
	statusMessage = document.querySelector('.status');

let
	compNum,
	result,
	meScore = 0,
	compScore = 0,
	imgNumb = {
		0: 'img/rock.webp',
		1: 'img/paper.webp',
		2: 'img/scissors.webp'
	};

function animation(selector) {
	selector.classList.add('fade');
	selector.setAttribute('src', imgNumb[0]);
}

function switchImg(selector, src) {
	selector.setAttribute('src', src);
	selector.classList.remove('fade');
}

function showStatusMessage(message, color) {
	statusMessage.innerHTML = message;
	statusMessage.style.color = color;
}

function setMyImg(src) {
	setTimeout(() => {
		switchImg(meImg, src)
		if (result == -1) {
			compScore += 1;
			compScoreSelector.innerHTML = `${compScore}`;
			showStatusMessage('LOSE', 'rgb(185, 77, 77)');
		} else if (result == 1) {
			meScore += 1;
			meScoreSelector.innerHTML = `${meScore}`;
			showStatusMessage('WIN', 'rgb(77, 185, 118)')
		} else {
			showStatusMessage('DRAW', 'rgb(51, 51, 51)')
		}

		setTimeout(() => {
			statusMessage.innerHTML = '';
		}, 1500);
	}, 2000);
}

function setCompImg(src) {
	setTimeout(() => {
		switchImg(compImg, src)
		buttons.forEach(el => {
			el.removeAttribute('disabled')
		})
	}, 2000);
}

function prepare() {
	compNum = (Math.floor(Math.random() * 3));
	animation(meImg);
	animation(compImg);
	setCompImg(imgNumb[compNum]);
}

function play(btnSelector, img, win, lose) {
	document.querySelector(btnSelector).addEventListener('click', () => {
		buttons.forEach(el => {
			el.setAttribute('disabled', 'true')
		})
		prepare();
		setMyImg(img);
		if (compNum == win) {
			result = 1;
		} else if (compNum == lose) {
			result = -1
		} else {
			result = 0
		}
	})
}

play('#rockBtn', imgNumb[0], 2, 1);
play('#paperBtn', imgNumb[1], 0, 2);
play('#scissorsBtn', imgNumb[2], 1, 0);


