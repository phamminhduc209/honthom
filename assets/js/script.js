var app = app || {};

app.init = function () {};

$(document).ready(function () {
	app.init();
	var wow = new WOW({
		animateClass: "animate__animated",
	});
	wow.init();
});