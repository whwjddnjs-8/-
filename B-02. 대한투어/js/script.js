$(function () {
    /* Sub Menu Slide Down */
    $('.sub_menu_area').hide()
    $('.menu_area').mouseover(function () {
        $('.sub_menu_area').stop().slideDown()
    }).mouseout(function () {
        $('.sub_menu_area').stop().slideUp()
    })

    /* 서브메뉴에 마우스 올렸을 때 메인 메뉴에 active 클래스 추가 */
    $('.sub_menu').mouseover(function () {
        var id = $(this).attr('id');
        $('.main_menu li[id=' + id + ']').addClass('active')
    }).mouseout(function () {
        $('.main_menu li').removeClass('active')
    })

    /* Slide */
    $('.slides a').eq(0).siblings().css(
        'top',
        '-300px'
    );
    var slideIdx = 0;
    setInterval(function () {
       if (slideIdx < 2) {
			slideIdx++;
		} else {
			slideIdx = 0;
		}
        $('.slides a').eq(slideIdx).siblings().animate({
            "top": "-300px"
        })
        $('.slides a').eq(slideIdx).animate({
            "top": '0'
        })
    }, 3000)
    
    /* PopUp */
    $('.layer_popup').hide()
    $('.notice_area ul li').first().click(function() {
        $('.layer_popup').show()
    })
    $('.popup_close_btn').click(function() {
        $('.layer_popup').hide()
    })
})
