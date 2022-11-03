$(function () {
	/* Header */
	$('nav').mouseover(function () {
		$('.sub-menu-area').stop().slideDown('fast')
	}).mouseout(function () {
		$('.sub-menu-area').stop().slideUp('fast')
	});

	/* Slides */
	$('.slides>a').eq(0).siblings().css("left", '-100%')

    var slideIdx = 0;
	setInterval(function () {
		if (slideIdx < 2) {
			slideIdx++;
		} else {
			slideIdx = 0;
		}

		$('.slides>a').eq(slideIdx).siblings().animate({"left" : '-100%'})
		$('.slides>a').eq(slideIdx).animate({"left" : '0'})
		
	}, 3000)

	/* Modal */
	$('.notice-area ul li').first().click(function () {
		$('.modal_popup').show()
	})

	$('.modal_close_btn').click(function () {
		$('.modal_popup').hide()
	})
})