// const sections = document.querySelectorAll('section')
// const options = {
// 	root: null,
// 	threshold: 0,
// 	rootMargin: '-150px',
// }

// const observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach(entry => {
// 		if (!entry.isIntersecting) {
// 			return
// 		}
// 		console.log(entries)
// 		entry.target.classList.toggle('brown')
// 		observer.unobserve(entry.target)
// 	})
// }, options)

// sections.forEach(section => {
// 	observer.observe(section)
// })

// const button = document.querySelector('button')

// console.log(button.hasAttribute('type'))

// $('button').attr('type')

// console.log(
// 	window.getComputedStyle(document.documentElement).getPropertyValue('--clr')
// )
const btn = document.querySelector('.btn')

// const navbar = document.querySelector('nav')
// let custom = 0
// window.addEventListener('scroll', () => {
// 	const scroll = window.pageYOffset
// 	console.log(navbar.style.top)
// 	if (custom > scroll) {
// 		navbar.style.top = '0'
// 	} else {
// 		navbar.style.top = '-80px'
// 	}
// 	custom = scroll
// })

btn.addEventListener('click', e => {
	let top = e.clientY - e.target.offsetTop
	let left = e.clientX - e.target.offsetLeft
	console.log(e.target.offsetLeft)
	console.log(e.target.offsetTop)

	const create = document.createElement('span')
	create.classList.add('ripple')
	create.style.top = `${top}px`
	create.style.left = `${left}px`
	btn.appendChild(create)

	setTimeout(() => {
		create.remove()
	}, 500)
})
