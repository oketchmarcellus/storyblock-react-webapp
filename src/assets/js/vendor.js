/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.querySelectorAll('#nav a, .scrolly').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault(); // Prevent default anchor click behavior
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		
		// Delay before scrolling
		setTimeout(() => {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}, 300); // Adjust the delay in milliseconds
	});
});

