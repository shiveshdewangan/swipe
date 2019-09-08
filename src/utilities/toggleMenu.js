export const toggleMenu = (selector) => {
	var x = document.getElementById(selector);
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
};
