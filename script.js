const slideshowBox = document.querySelector('.section-1__slideshow');

const slideShowsDivs = () => {
	for (let i = 1; i <= 5; i++) {
		const div = document.createElement('div');
		div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

		i === 1 && div.classList.add('change'); // asign class active to 1 image background

		slideshowBox.appendChild(div);
	}
};

slideShowsDivs();

// ----------------------------------------------------------------------

const divs = document.querySelectorAll('.section-1__slideshow div'); // array of all images background
let count = 0;
const slideshow = () => {
	setInterval(() => {
		const div = document.querySelector('.section-1__slideshow .change');
		count++;
		div.classList.remove('change');
		if (count < divs.length) {
			divs[count].classList.add('change');
		} else {
			count = 0;
			divs[count].classList.add('change');
		}
	}, 10000);
};

slideshow();

// -----------------------------------------------------------------------

const cube = document.querySelector('.section-1__cube');
const topXcontroller = document.querySelector('.top-x-control');
const bottomXcontroller = document.querySelector('.bottom-x-control');
const leftYcontroller = document.querySelector('.left-y-control');
const rightYcontroller = document.querySelector('.right-y-control');
const topZcontroller = document.querySelector('.top-z-control');
const bottomZcontroller = document.querySelector('.bottom-z-control');
const stopRotate = document.querySelector('.section-1__controls');
let x = 0;
let y = 0;
let z = 0;
let stop;

topXcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

bottomXcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

rightYcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

leftYcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

topZcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateZ(${(z += 20)}deg) rotateY(${y}deg) rotateX(${x}deg)`;
});

bottomZcontroller.addEventListener('click', () => {
	cube.style.transform = `rotateZ(${(z -= 20)}deg) rotateY(${y}deg) rotateX(${x}deg)`;
});

const playPause = bool => {
	if (bool) {
		stop = setInterval(() => {
			cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
		}, 50);
	} else {
		clearInterval(stop);
	}
};

playPause(true);

stopRotate.addEventListener('mouseover', () => {
	playPause(false);
});

stopRotate.addEventListener('mouseout', () => {
	playPause(true);
});


// ----------------------------------------------------------------------------------------------

const macbookContent = document.querySelector('.section-3__content');

window.addEventListener('scroll', () => {
	if (window.pageYOffset + window.innerHeight >= macbookContent.offsetTop + macbookContent.offsetHeight / 2) {
		macbookContent.classList.add('change');
	}
});
