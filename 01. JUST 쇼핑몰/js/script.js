$(function () {
	/* Header subMenu show and hide */
	$('header nav ul.gnb>li').hover(function () {
		$('ul.sub').stop().slideDown();
	}, function () {
		$('ul.sub').stop().slideUp();
	})

	/* Slide show and hide */
	$('.slide ul.slide_all>li').eq(0).siblings().css("top", "-300px");

	var slideIdx = 0;
	setInterval(function () {
		if (slideIdx < 2) {
			slideIdx++;
		} else {
			slideIdx = 0;
		}
		$('.slide ul.slide_all>li').eq(slideIdx).siblings().animate({"top" : '-300px'}, 500)
		$('.slide ul.slide_all>li').eq(slideIdx).animate({"top" : '0'}, 500)
	}, 3000);
	
	/* Contents - TabMenu show and hide */
	$('.tab-area ul.btn li').click(function () {
		const idx = $(this).index()
		
		$(this).siblings().removeClass('active')
		$(this).addClass("active")

		$('.tab-area .tab-content').removeClass('active')
		$('.tab-area .tab-content').eq(idx).addClass('active')
	})

	  // Layer Popup  show and hide//
	$('.notice li:first').click(function(){
		$('#modalWrap').addClass("active");
	});
	$('.popup-close-btn').click(function(){
		$('#modalWrap').removeClass("active");
	});

});