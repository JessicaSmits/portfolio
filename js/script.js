var mediaQuery = window.matchMedia("(min-width: 1025px)")
$(document).ready(removeClear());

function removeClear() {
    if (mediaQuery.matches) {
        divclear = $("#removable-clear");
        divclear.removeClass("clear");
        $("#languages h3").addClass("bottom");
        

    } else {
        divclear = $("#removable-clear");
        divclear.addClass("clear");

        $("#languages h3").removeClass("bottom");
    }
}

window.onresize = removeClear;
