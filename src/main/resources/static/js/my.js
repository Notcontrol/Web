var e = jQuery, f = c(0);
e("a[href^='#']").click(function (a) {
    var b = e(this), c = b.attr("href"), f = b.parent("#splash--scroller").length > 0, g = f ? 700 : 400;
    "#main-content" == c && e("html, body").animate({scrollTop: d(c)}, g), e(c).focus()
}), window.onload = function () {
    "#main-content" == window.location.hash && e("html, body").animate({scrollTop: d(window.location.hash)}, 250)
}