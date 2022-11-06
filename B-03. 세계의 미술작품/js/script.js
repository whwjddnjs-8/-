$(function() {
    /*Sub Menu*/
    $('.menu_area ul.main_menu > li').mouseover(function() {
       $(this).children('ul').stop().slideDown()
    }).mouseout(function() {
       $(this).children('ul').stop().slideUp()
    })
    
    /*Slides*/
    $('.slides a').eq(0).siblings().css("top","-300px");
    var slideIdx = 0;
    setInterval(function() {
        if(slideIdx < 2) {
            slideIdx++;
        } else {
            slideIdx = 0;
        }
        
        $('.slides a').eq(slideIdx).animate({"top" : "0"})
        $('.slides a').eq(slideIdx).siblings().animate({"top" : "-300px"})
    },3000)
    
    /* PopUp */
    $('.layer_popup').hide()
    $('.notice_area').first().click(function() {
        $('.layer_popup').show()
    })
    
    $('.popup_close_btn').click(function() {
        $('.layer_popup').hide()
    })
})