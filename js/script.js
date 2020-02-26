$("document").ready(function(){
	$(".theTarget").skippr();
});

$(".theTarget").skippr({
	transition : 'fade',
	speed : 1000,
	easing : 'easOutQuart',
	navType : 'block',
	childrenElementType : 'div',
	arrows : true,
	autoPlay : true,
	autoPlayDuration : 5000,
	keyboardOnAlways : true,
	hidePrevious : false
});