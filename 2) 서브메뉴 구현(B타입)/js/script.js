$(function() {
    /* Header (1)*/
   /* $('.menu_area').mouseover(function() {
        $('.sub_menu_area').stop().slideDown()
    }).mouseout(function() {
       $('.sub_menu_area').stop().slideUp()
    })
    
    $('.sub_menu_area .menu_area ul.sub_menu').mouseover(function() {
        var idx = $(this).index();
        $('header .menu_area ul.main_menu li').eq(idx).children('a').addClass('active')
    }).mouseout(function() {
       $('header .menu_area ul.main_menu li a').removeClass('active')
    })*/
    
    /* Header(2)*/
   /* $('.menu_area').mouseover(function() {
        $('.sub_menu_area').stop().slideDown()
    }).mouseout(function() {
        $('.sub_menu_area').stop().slideUp()
    })
    
    $('.sub_menu_area .menu_area ul.sub_menu').mouseover(function() {
        var idx = $(this).index()
        $('header .menu_area ul.main_menu li').eq(idx).children('a').addClass('active')
    }).mouseout(function() {
        $('header .menu_area ul.main_menu li a').removeClass('active')
    })*/
    
    /* Header(3)*/
    $('.menu_area li').mouseover(function() {
        $(this).children('.sub_menu').stop().slideDown()
    }).mouseout(function() {
        $(this).children('.sub_menu').stop().slideUp()
    })
})