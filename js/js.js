const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.nav-link');

function setActiveSlide(i) {
	for (slide of slides) {
		slide.classList.remove('active');
		slides[i].classList.add('active');
	}

	for (dot of dots) {
		dot.classList.remove('active');
		dots[i].classList.add('active');
	}
}

function setActiveNav(i) {
	for (link of links) {
		link.classList.remove('active');
		links[i].classList.add('active');
	}
}

for (let j = 0; j < dots.length; j++) {
	dots[j].addEventListener('click', function () {
		setActiveSlide(j);
	})
}

for (let x = 0; x < links.length; x++) {
	links[x].addEventListener('click', function () {
		setActiveNav(x);
	})
}