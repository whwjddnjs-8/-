$(function() {
    $('.gallery').hide()
    $('.tab_btn a').click(function() {
        var idx = $(this).index()
        $('.tab_contents div').eq(idx).show()
        $('.tab_contents div').eq(idx).siblings().hide()
    })
})