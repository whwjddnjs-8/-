$(function () {
    $('.main_menu li').mouseover(function () {
        $('.sub_menu').stop().slideDown()
    }).mouseout(function () {
        $('.sub_menu').stop().slideUp()
    })

    $('.slides a').eq(0).siblings().css("left", "-100%")
    var slideIdx = 0;
    setInterval(function () {
        if (slideIdx < 2) {
            slideIdx++;
        } else {
            slideIdx = 0;
        }

        $('.slides a').eq(slideIdx).animate({
            "left": "0px"
        })
        $('.slides a').eq(slideIdx).siblings().animate({
            "left": "-100%"
        })
    }, 3000)
    
    $('.gallery').hide()
    $('.tab_btn a').click(function() {
        var idx = $(this).index()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.tab_content div').eq(idx).show()
        $('.tab_content div').eq(idx).siblings().hide()
        
    })
    
    $('.notice ul li').first().click(function() {
        $('.layer_popup').slideDown()
    })
    
    $('.popup_close_btn').click(function() {
        $('.layer_popup').slideUp()
    })
})
