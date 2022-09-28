const
	meImg = document.querySelector('.me__img'),
	compImg = document.querySelector('.comp__img'),
	meScoreSelector = document.querySelector('.me__score'),
	compScoreSelector = document.querySelector('.comp__score');

let
	compNum,
	result,
	meScore = 0,
	compScore = 0,
	imgNumb = {
		0: 'img/rock.png',
		1: 'img/paper.png',
		2: 'img/scissors.png'
	};

function animation(selector) {
	selector.classList.add('fade');
}

function switchImg(selector, src) {
	selector.setAttribute('src', src);
	selector.classList.remove('fade');
}

function setMyImg(src) {
	setTimeout(() => {
		switchImg(meImg, src)
		if (result == -1) {
			compScore += 1;
			compScoreSelector.innerHTML = `${compScore}`;
		} else if (result == 1) {
			meScore += 1;
			meScoreSelector.innerHTML = `${meScore}`;
		}
	}, 2000);
}

function setCompImg(src) {
	setTimeout(() => {
		switchImg(compImg, src)
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
