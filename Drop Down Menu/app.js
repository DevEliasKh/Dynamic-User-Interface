const menu = document.querySelector('.drop-menu div:first-child');
const options = document.querySelectorAll('.option');

menu.addEventListener('click', () => {
	options.forEach((element) => {
		element.classList.toggle('hidden');
	});
});
