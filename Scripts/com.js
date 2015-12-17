/**
 * Created by Jason on 15/12/15.
 */
$(function () {
    var div_string = "<div class='blog-gotop' style='bottom: " + top + "px;'><a>TOP</a></div>";
    var div = $(div_string);

    $("#main_div").after(div);

    $(window).scroll(function () {
        var tip_div = $(".blog-gotop");

        if ($(window).scrollTop() > 10) {
            tip_div.fadeIn(500);
        }
        else {
            tip_div.fadeOut(500);
        }

    });

    $(document.body).on("click", ".blog-gotop", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?a5817c82f0423f759aa1fec75f7a1cec";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
