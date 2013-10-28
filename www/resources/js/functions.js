$(document).ready(function () {
	$('.company, .products, .delivers, .team, .contacts, .delivers-map').css('height', document.body.clientHeight);

	var marginMap = document.body.clientWidth / 2 - 380;
	$('.delivers-map').css('margin-left', marginMap)

	var blockMargin = (document.body.clientHeight - $('.company-wrap').height()) / 2;
	$('.company-wrap').css('marginTop', blockMargin)

	$(".wrapper").onepage_scroll({
		pagination: true
	});

	$('.page-menu-wrap--item').click(function () {
		linkIndex = ($(this).index() - 1);
		$('.onepage-pagination li:eq(' + linkIndex + ') a').click();
	});

	$('.delivers-map-point').hover(function () {
		$(this).css({"margin-left": "-=7px", "margin-top": "-=7px"}).children().show();
	}, function () {
		$(this).css({"margin-left": "+=7px", "margin-top": "+=7px"}).children().hide();
	});


	$(function () {
		$(".slider").slidesjs({
			callback: {
				start: function () {
					alert('hello');
				}
			},
			width: 420,
			height: 346
		});
	});


});