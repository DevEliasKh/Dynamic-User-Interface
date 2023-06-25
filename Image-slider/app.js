const nextBtn = document.querySelector('.next');
const perviousBtn = document.querySelector('.pervious');
const images = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');
let showedImage = [];

function next() {
	images.forEach((element) => {
		if (!element.classList.contains('hidden')) {
			showedImage.push(element);
		}
	});
	const nextImageNum = +showedImage[0].getAttribute('data-num');
	const nextImage = document.querySelector(`[data-num="${nextImageNum + 1}"]`);
	console.log(nextImageNum);
	nextImage.classList.toggle('hidden');
	showedImage[0].classList.toggle('hidden');
	showedImage = [];
}

function pervious() {
	images.forEach((element) => {
		if (!element.classList.contains('hidden')) {
			showedImage.push(element);
		}
	});
	const perviousImageNum = +showedImage[0].getAttribute('data-num');
	const perviousImage = document.querySelector(
		`[data-num="${perviousImageNum - 1}"]`
	);
	perviousImage.classList.toggle('hidden');
	showedImage[0].classList.toggle('hidden');
	showedImage = [];
}

nextBtn.addEventListener('click', next);
perviousBtn.addEventListener('click', pervious);
dot.forEach((element) => {
	element.addEventListener('click', () => {
		element.style.backgroundColor = 'white';
		const imageNum = +element.getAttribute('data-num');
		images.forEach((element) => {
			if (!element.classList.contains('hidden')) {
				element.classList.add('hidden');
			}
		});
		document.querySelector(`[data-num="${imageNum}"]`).classList.toggle('hidden');
	});
	element.style.backgroundColor = 'black';
});
