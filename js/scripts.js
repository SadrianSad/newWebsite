document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav')
	function addBgc() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	window.addEventListener('scroll', addBgc)
})

const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')

const addClass = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('body')
}

navBtn.addEventListener('click', addClass)
