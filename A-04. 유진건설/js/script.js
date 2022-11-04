$(function () {
    /* Sub Menu*/
    $('.menu_area.sub').hide();

    $('.menu_area').mouseenter(function () {
        $('.menu_area.sub').stop().slideDown()
    }).mouseleave(function () {
        $('.menu_area.sub').stop().slideUp()
    })

    /* Slides */
    $('.slides a:gt(0)').hide();

    setInterval(function () {
        $('.slides a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.slides')
    }, 3000)

    /* PopUp Layer */
    $('.popup_layer').hide()
    $('.notice_area .notice li a').first().click(function () {
        $('.popup_layer').show()
    })
    
    $('.popup_content .popup_close_btn').click(function() {
        $('.popup_layer').hide()
    })
})
