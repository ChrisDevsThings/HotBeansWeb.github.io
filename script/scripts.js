document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav-links');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			const isOpen = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', String(isOpen));
		});

		// Close nav on link click (mobile)
		nav.addEventListener('click', function (e) {
			if (e.target.tagName === 'A' && nav.classList.contains('open')) {
				nav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Smooth scrolling for same-page links
	document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href.length > 1) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});
});

