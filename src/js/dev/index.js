console.log("Concat is runing");
$(document).ready(function () {
	console.log("fuck");
	var io = {
		iam : $('.w1'),
		who : $('.w2')
	}
	
	io.iam.hide(0).delay(500).fadeIn(3000);
	io.who.hide().fadeIn(4000);
});