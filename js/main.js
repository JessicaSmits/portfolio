var desktopSize = window.matchMedia("(min-width:1026px");
var tabletSize = window.matchMedia("(max-width: 1025px)");
var checkTablet = window.matchMedia("(min-width: 720px)")
var mobileSize = window.matchMedia("(max-width: 719px)");

var divHeight;
var pHeight;
var marginTop;

$(function() {windowSize(); sortDivs()});

// buttons
$("div.burger-icon").click(burgerMenu);
$('#sortBtn').on('click', sortDivs);

function windowSize() {
    // check device
    if (mobileSize.matches) {
        $("nav.standard").hide();
        $("nav.burger-menu, div.burger-icon").show();
        $("section.contact div.links h3").hide();
        $('footer').hide();
        $('#more').hide();;
        $('div.overview div:last-child').addClass('bottom');

    } else {
        $("nav.standard").show();
        $("nav.burger-menu, div.burger-icon").hide();
        $("section.contact div.links h3").show()
        $('footer').show();
        $('#more').show();
        $('div.overview div:last-child').removeClass('bottom');
        
        // header auto height
        var navHeight = $('nav.standard').innerHeight();
        $('header').css({ 'height': navHeight });
    }

    // text under photos
    var widthOfImg = $(".project img").width();
    $("p.photo-text").css({ "max-width": widthOfImg });

    var heightOfContent = $("header").outerHeight(true) + $("main").outerHeight(true) + $("footer").outerHeight(true);

    if ($(window).height() > heightOfContent) {
        $("footer").addClass("fixed");
    } else {
        $("footer").removeClass("fixed");
    }


    // automatic vertical center. Skills
    $('.skills div.container').each(function (index) {
        divHeight = $(this).height();
        pHeight = $(this).find('p').height();
        marginTop = ((divHeight - pHeight) / 2);

        console.log(marginTop);
        $(this).find('p').css({ 'marginTop': marginTop });
    });

}

function burgerMenu() {
    $("div.overlay").animate({
        "width": "toggle"
    }, 300);
    $("div.burger-icon, div.bar, #bar2, #bar1, #bar3, body").toggleClass("open");

}

// sort project from last to first
function sortDivs() {
    $('#all-projects div.project').removeClass('bottom');

    var $div = $('div.project');
    var sortedDivs = $div.sort(function (a, b) {
        return ($(a).find(".project .container h2").text() < $(b).find(".project .container h2").text() ? 1 : -1);
    });

    $("#all-projects").html(sortedDivs);

    $('#all-projects div.project:last-child').addClass('bottom');
}

window.onresize = windowSize;

// this code is so the text also changes when the picture changes without the window changing.jqu
widthOfImg.onchange = function(){
    var widthOfImg = $(".project img").width();
    $("p.photo-text").css({ "max-width": widthOfImg });
}

