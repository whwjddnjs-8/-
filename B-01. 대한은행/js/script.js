$(function () {
    /* Sub Menu Slide Up And Down*/
    $('.menu_area ul.main_menu').mouseover(function () {
        $('.menu_area ul.sub_menu').stop().slideDown()
    }).mouseout(function () {
        $('.menu_area ul.sub_menu').stop().slideUp()
    })

    /* Slide Area */
    $('.slides a').eq(0).siblings().css("left", "-100%")
    var slideIdx = 0;
    setInterval(function () {
        if (slideIdx < 2) {
            slideIdx++;
        } else {
            slideIdx = 0;
        }

        $('.slides a').eq(slideIdx).siblings().animate({
            "left": "-100%"
        })
        $('.slides a').eq(slideIdx).animate({
            "left": "0"
        })
    }, 3000)

    /* Tab Area */
    $('.notice_area').show()
    $('.gallery_area').hide()
    
    $('.tab_area .btn_area a').click(function () {
        var idx = $(this).index();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        if (idx == 0) {
            $('.notice_area').show()
            $('.gallery_area').hide()
        } else {
            $('.notice_area').hide()
            $('.gallery_area').show()
        }

    })
    
    /* Layer PopUp */
    $('.layer_popup').hide()
    $('.notice_area').first().click(function() {
        $('.layer_popup').show()
    })
    $('.popup_close_btn').click(function() {
        $('.layer_popup').hide()
    })
})
