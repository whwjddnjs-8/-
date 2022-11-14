$(function () {
    /* 왼쪽에서 오른쪽 */
    /*$('.slides a').eq(0).siblings().css("left", "-100%")
    var slideIdx = 0;

    setInterval(function() {
         if (slideIdx < 2) {
            slideIdx++;
        } else {
            slideIdx = 0;
        }
        $('.slides a').eq(slideIdx).animate({
            "left": "0px"
        })
        $('.slides a').eq(slideIdx).siblings().animate({
            "left":
            "-100%"
        })
    },3000)
*/
    /* 위에서 아래로 */
    /*$('.slides a').eq(0).siblings().css("top", "-300px")
    var slideIdx = 0;

    setInterval(function () {
        if (slideIdx < 2) {
            slideIdx++
        } else {
            slideIdx = 0
        }
        
        $('.slides a').eq(slideIdx).animate({"top": '0px'})
        $('.slides a').eq(slideIdx).siblings().animate({"top": '-300px'})
    },3000)*/

    /* Fade in,Fade out*/
    $('.slides a').eq(0).siblings().hide()
    var slideIdx = 0;
    setInterval(function() {
        if(slideIdx < 2) {
            slideIdx++;
        } else {
            slideIdx = 0;
        }
        $('.slides a').eq(slideIdx).fadeIn()
        $('.slides a').eq(slideIdx).siblings().fadeOut()
    },3000)
})
