$(function () {
	/* Header */
	$('header .main_menu>ul>li').mouseover(function () {
		$(this).children('ul').stop().slideDown()
	}).mouseout(function () {
		$(this).children('ul').stop().slideUp()
	})

	/* Slides */
	$('.slides a:gt(0)').hide();

	setInterval(function(){
		$('.slides a:first-child').fadeOut()
		.next('a').fadeIn()
		.end().appendTo('.slides');
	}, 3000);

	/* Tab Menu */
	$('.gallery_area').hide()
	$('.tab_btn li').click(function () {
		const idx = $(this).index();
		
		$(this).siblings().removeClass('active')
		$(this).addClass('active')

		if (idx == 0) {
			$('.notice_area').show()
			$('.gallery_area').hide()
		} else {
			$('.notice_area').hide()
			$('.gallery_area').show()
		}
	})

	/* Modal */
	$('.notice_area ul').first().click(function () {
		$('.modal_popup').show()
	})

	$('.modal_close_btn').click(function () {
		$('.modal_popup').hide()
	})
})