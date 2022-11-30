
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 3000,
		disableOnInteraction:false,
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,
})
