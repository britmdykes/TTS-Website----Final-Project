$('#bigText').on('click', function(e) {
	$('p').addClass('largetext');
})

$('#bigText').on('click', function(e) {
	$('.box').addClass('largebox');
})

$('#smallText').on('click', function(e) {
	$('p').removeClass('largetext');
})

$('#smallText').on('click', function(e) {
	$('.box').removeClass('largebox');
})

$('#bigText').on('click', function(e){
	$('.textButton').addClass('largeTextButton')
})

$('#smallText').on('click', function(e){
	$('.textButton').removeClass('largeTextButton')
})