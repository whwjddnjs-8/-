$(function () {
    /* Sub Menu */
    $('.sub_menu_area').hide()
    $('.menu_area').mouseover(function () {
        $('.sub_menu_area').stop().slideDown()
    }).mouseout(function () {
        $('.sub_menu_area').stop().slideUp()
    })

    $('.sub_menu_area .menu_area ul').mouseover(function () {
        var id = $(this).attr('id')
        $('.main_menu li[id="' + id + '"]').addClass('active')
    }).mouseout(function () {
        $('.main_menu li').removeClass('active')
    })

    /* Slides */
    $('.slides a').eq(0).siblings().css("left", "-100%")
    var slideIdx = 0;
    setInterval(function () {
        if (slideIdx < 2) {
            slideIdx++
        } else {
            slideIdx = 0
        }

        $('.slides a').eq(slideIdx).animate({
            "left": '0'
        })
        $('.slides a').eq(slideIdx).siblings().animate({
            "left": '-100%'
        })
    }, 3000)

    /* Popup */
    $('.layer_popup').hide()
    $('.notice_area').first().click(function () {
        $('.layer_popup').show();
    })
    $('.popup_close_btn').click(function () {
        $('.layer_popup').hide();
    })
})
