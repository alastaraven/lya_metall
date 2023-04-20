var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#CCCCCC';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
	var scroll = window.pageYOffset;
	if (scroll < 500) {
		// start page
		body.style.backgroundColor = '#CCCCCC';
	} else if (scroll >= 500 && scroll < 1000) {
		// untill 1000 px page height
		body.style.backgroundColor = '#EEEEEE';
	} else if (scroll >= 1000 && scroll < 2000) {
		// untill 2000 px page height
		body.style.backgroundColor = '#DDD62B';
	} else if (scroll >= 2000 && scroll < 3000) {
		// untill 3000 px page height
		body.style.backgroundColor = '#EEEEEE';
	} else if (scroll >= 3000 && scroll < 4000) {
		// untill 5000 px page height
		body.style.backgroundColor = '#CCCCCC';
	} else if (scroll >= 4000) {
		// end page
		body.style.backgroundColor = '#111111';
	}
}