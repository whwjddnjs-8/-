$(function () {
    $('.main_menu>li').mouseover(function () {
        $(this).children('.sub_menu').css('height', 'auto').stop().slideDown()
    }).mouseout(function () {
        $(this).children('.sub_menu').css('height', 'auto').stop().slideUp()
    })
    
    $('.sub_menu').mouseover(function() {
        $(this).parent().children('a').addClass('active')
    }).mouseout(function() {
        $(this).parent().children('a').removeClass('active')
    })
})
