/**
 * Created by Jason on 15/12/15.
 */
$(function () {
    $(".page").css("display", "none");
    var scrollHeight = 260;
    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollHeight) {
            $(".page").css("display", "block");
            $(".index").css("display", "none");
            $("#main_div").css("padding-top", "300px");
        }
        else {
            $(".index").css("display", "block");
            $(".page").css("display", "none");
            $("#main_div").css("padding-top", "0px");
        }

    });
});