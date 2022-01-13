var desktopSize = window.matchMedia("(min-width:1026px");
var tabletSize = window.matchMedia("(max-width: 1025px)");
var checkTablet = window.matchMedia("(min-width: 720px)")
var mobileSize = window.matchMedia("(max-width: 719px)");
$(document).ready(windowSize());
$("div.burger-icon").click(burgerMenu);

function windowSize() {
    if (tabletSize.matches && checkTablet.matches) {
        divclear = $("#removable-clear");
        divclear.addClass("clear");

        $("#languages h3").removeClass("bottom");

    } else if (mobileSize.matches || desktopSize.matches) {
        divclear = $("#removable-clear");
        divclear.removeClass("clear");
        $("#languages h3").addClass("bottom");
    }

    if (mobileSize.matches) {
        $("nav.standard").hide();
        $("nav.burger-menu, div.burger-icon").show();
        $("section.contact div.links h3").hide();
        $(".contact div.temporary").addClass("clear");

    } else {
        $("nav.standard").show();
        $("nav.burger-menu, div.burger-icon").hide();
        $("section.contact div.links h3").show()
        $(".contact div.temporary").removeClass("clear");
    }

    var widthOfImg = $(".project img").width();
    $("p.photo-text").css({"max-width": widthOfImg});

    var heightOfContent = $("header").outerHeight(true) + $("main").outerHeight(true) + $("footer").outerHeight(true);

    if ($(window).height() > heightOfContent) {
        $("footer").addClass("fixed");
    } else {
        $("footer").removeClass("fixed");
    }
}

function burgerMenu(){
    $("div.overlay").animate({
        "width": "toggle"
    }, 300);
    $("div.burger-icon, div.bar, #bar2, #bar1, #bar3, body").toggleClass("open");

}

window.onresize = windowSize;
