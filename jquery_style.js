console.log("yay")

$(document).ready(function() {
	console.log("My document has been loaded")

$('#change-red').on('click', function(){
	$('#nowred').css('background-color', 'red')
})

$('#change-green').on('click', function(){
	$('#nowgreen').css('background-color', 'green')
})
$('#change-blue').on('click', function(){
	$('#nowblue').css('background-color', 'blue')
})

$('#make-big').on('click', function() {
	$('.changing-divs#nowbig').css('width', '600px')
	$('.changing-divs#nowbig').css('height', '800px')

})
$('#make-small').on('click', function() {
	$('.changing-divs#nowsmall').css('width', '20px')
	$('.changing-divs#nowsmall').css('height', '20px')


})
})





