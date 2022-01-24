const $menuButton = document.getElementById('menuButton');
$menuButton.addEventListener('click', () => {
	document.querySelector('.header__navbar').classList.toggle('header__navbar--hidden');
});

document.addEventListener('readystatechange', () => {
	if (document.readyState === 'complete') {
		new Swiper(".mySwiper", {
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}
}, { once: true });