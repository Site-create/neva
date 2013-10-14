$(document).ready ( function() {
$('.company, .products, .delivers, .team, .contacts, .delivers--map').css('height',document.body.clientHeight);

var blockMargin = (document.body.clientHeight - $('.company--wrap').height())/2;
$('.company--wrap').css('marginTop',blockMargin)

var blockMarginTwo = (document.body.clientHeight - $('.products--wrap').height())/2;
$('.products--wrap').css('marginTop',blockMarginTwo)

var blockMarginThree = (document.body.clientHeight - $('.products--wrap').height())/2;
$('.products--wrap').css('marginTop',blockMarginTwo)
});