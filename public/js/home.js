function show(location) {
	var displayAbout = document.getElementById('about');

	if (location == 'about') {
		displayAbout.style.display='block'
	}
	
}

function showMenu() {
	var menu = document.getElementById('menu')
	var hamburger = document.getElementById('hamburger')

	menu.style.display = 'block'
	hamburger.style.display = 'none'
}

function showHamburger() {
	var menu = document.getElementById('menu')
	var hamburger = document.getElementById('hamburger')

	menu.style.display = 'none'
	hamburger.style.display = 'block'
}