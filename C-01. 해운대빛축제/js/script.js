$(function () {
    /* Sub Menu */
    $('.main_menu>li').mouseover(function () {
        $(this).children('.sub_menu').stop().slideDown();
    }).mouseout(function () {
        $(this).children('.sub_menu').stop().slideUp();
    });

    /* Slides */
    $('.slides a').eq(0).siblings().hide()
    setInterval(function () {
        $('.slides a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.slides');
    }, 3000);

    /* Tab Area */
    $('.gallery_area').hide()
    $('.tab_area .btn_area li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        var index = $(this).index()
        if (index == 0) {
            $('.notice_area').show()
            $('.gallery_area').hide()
        } else {
            $('.notice_area').hide()
            $('.gallery_area').show()
        }
    })
    
    /* Popup */
    $('.layer_popup').hide()
    $('.notice_area li').first().click(function() {
        $('.layer_popup').show()
    })
    $('.popup_close_btn').click(function() {
        $('.layer_popup').hide()
    })
})
