$(function () {
    /* SubMenu */
    $('.main_menu > li').mouseover(function () {
        $(this).addClass('active')
        $(this).children('ul').stop().slideDown()
    }).mouseout(function () {
        $(this).removeClass('active')
        $(this).children('ul').stop().slideUp()
    })

    /* Slides */
    $('.slides a').eq(0).siblings().hide()
    var slideIdx = 0;

    setInterval(function () {
        if (slideIdx < 2) {
            slideIdx++
        } else {
            slideIdx = 0;
        }

        $('.slides a').eq(slideIdx).fadeIn()
        $('.slides a').eq(slideIdx).siblings().fadeOut()
    }, 3000)

    /* Popup */
    $('.layer_popup').hide()
    $('.notice_area ul li').first().click(function () {
        $('.layer_popup').show()
    })
    $('.popup_close_btn').click(function () {
        $('.layer_popup').hide()
    })
})
