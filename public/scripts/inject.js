/**
@file 			inject.js
@author 			Milovan Gudelj
@description 	An inject script that adds css/js/html files to the page and makes it look better.
@version 		v0.1.0
*/

const checkPath = (l, s) => {
	// Checks if current location matches with one of the pages provided in the second parameter
	let page = -1;

	s.forEach((p, i) => {
		if (page === -1 && l.includes(p.url)) page = i;
	});

	return page;
};

function Path() {
	this.base = "https://upo.milovangudelj.com";
	this.css = `${this.base}/styles`;
	this.js = `${this.base}/scripts`;
	this.html = `${this.base}/fragments`;
}

const inject = async () => {
	const path = new Path();
	let locations = await fetch(`${path.base}/locations.json`).then((res) =>
		res.json()
	);

	// Check which page the user is currently on
	let page = checkPath(window.location.href, locations);

	// The extension should append variables.css and jQuery

	if (page >= 0) {
		// Append base stylesheets
		if (locations[page].css.base) {
			const baseStyles = document.createElement("link");
			baseStyles.setAttribute("rel", "stylesheet");
			baseStyles.setAttribute("href", path.css + "/base.css");
			document.head.appendChild(baseStyles);
		}

		// Append specific stylesheet
		if (locations[page].css.custom) {
			const myStyles = document.createElement("link");
			myStyles.setAttribute("rel", "stylesheet");
			myStyles.setAttribute("href", path.css + locations[page].css.custom);
			document.head.appendChild(myStyles);
		}
		// Append specific javascript
		if (locations[page].js) {
			const myScript = document.createElement("script");
			myScript.setAttribute("type", "application/javascript");
			myScript.setAttribute("src", path.js + locations[page].js);
			document.head.appendChild(myScript);
		}
	}
};

inject();
