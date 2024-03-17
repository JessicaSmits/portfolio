var desktopSize = window.matchMedia("(min-width:1026px");
var tabletSize = window.matchMedia("(max-width: 1025px)");
var checkTablet = window.matchMedia("(min-width: 720px)")
var mobileSize = window.matchMedia("(max-width: 719px)");

var divHeight;
var pHeight;
var marginTop;
var uniqueTags;


$(function () { windowSize(); headerResizeOnScroll(); findTags(); filterButtons(); sortProjects()});

window.onresize = windowSize;
window.onscroll = headerResizeOnScroll;

function headerResizeOnScroll() {
    if ($(document).scrollTop() > 100) {
        $("nav.standard li").css("font-size", "1em");
    } else if ($(document).scrollTop() < 100) {
        $("nav.standard li").css("font-size", "1.5em");
    }
}

// buttons
$("div.burger-icon").click(burgerMenu);
$('img').on('click', imgSize(this));

function windowSize() {
    // check device
    if (mobileSize.matches) {
        $("nav.standard").hide();
        $("nav.burger-menu, div.burger-icon").show();
        $('footer').hide();
        $('#more').hide();;
        $('div.overview div:last-child').addClass('bottom');

    } else {
        $("nav.standard").show();
        $("nav.burger-menu, div.burger-icon").hide();
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

        $(this).find('p').css({ 'marginTop': marginTop });
    });

}

function burgerMenu() {
    $("div.overlay").animate({
        "width": "toggle"
    }, 300);
    $("div.burger-icon, div.bar, #bar2, #bar1, #bar3, body").toggleClass("open");

}

// automate alternate project rows
function sortProjects() {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        // Check if index is even or odd to determine flex-direction
        if (index % 2 === 0) {
        project.classList.add('left');
        } else {
        project.classList.add('right');
        }
    });
}


// filter projects on tags
function findTags() {
    // Getting all the tags from the projects
    var tagsArray = $('.project .tag');
    var tagsSet = new Set();

    // Adding unique tags to the set
    tagsArray.each(function () {
        tagsSet.add($(this).text().trim());
    });

    // Converting the set back to an array
    var uniqueTags = Array.from(tagsSet);

    console.log(uniqueTags);

    // Calling the function to create buttons based on unique tags
    filterButtons(uniqueTags);
}

function filterButtons(tags) {
    if (!Array.isArray(tags)) {
        console.error("Tags is not an array");
        return;
    }
    
    $('#all-projects div.project').removeClass('bottom');

    var buttonContainer = $('#button-container');
    buttonContainer.empty(); // Clear any existing buttons

    // Creating buttons for each unique tag
    tags.forEach(function (tag) {
        var button = $('<button/>', {
            text: tag,
            class: 'filter-button',
            'data-filter': tag
        });
        buttonContainer.append(button);
    });

    var allButton = $('<button/>', { text: 'show all', class: 'filter-button', 'data-filter': 'all' });
    buttonContainer.append(allButton);

    var activeFilters = [];

    // Adding click event to filter buttons
    $('.filter-button').on('click', function () {
        var filter = $(this).data('filter');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            activeFilters = activeFilters.filter(function (item) {
                return item !== filter;
            });
        } else {
            $(this).addClass('active');
            activeFilters.push(filter);
        }

        if (activeFilters.length === 0) {
            $('.project').show();
        } else {
            $('.project').hide();
            $('.project').each(function () {
                var projectTags = $(this).find('.tag');
                var showProject = activeFilters.every(function (filter) {
                    return projectTags.hasClass(filter);
                });
                if (showProject) {
                    $(this).show();
                }
            });
        }

        if (filter == 'all' ) {
            $('.filter-button').removeClass('active');
            $('.project').show();
        }
    });

    $('#all-projects div.project:last-child').addClass('bottom');
    sortProjects();
    
}

// Call the findTags function to initiate the process
findTags();



function imgSize(clickedImg) {
    $(clickedImg).toggleClass("bigger-picture");
}

// https://codepen.io/wuh/pen/RxvLoO
$(function boxShadowCursor() {
    $('h1').each(function () {
        var el = $(this);
        var elWidth = $(el).width();
        var elHeight = $(el).height();
        var elOffset = $(el).offset();
        var viewportWidth = $(document).width();
        var viewportHeight = $(document).height();
        var elCentreX = elOffset.left + (elWidth / 2);
        var elCentreY = elOffset.top + (elHeight / 2);
        var elShadow = $(this).css('text-shadow');
        var elShadowSplit = elShadow.split(' ');
        var elShadowColor = [elShadowSplit[0], elShadowSplit[1], elShadowSplit[2]].join('');
        var elShDpthX = parseInt(elShadowSplit[3].replace(/\D/g, ''));
        var elShDpthY = parseInt(elShadowSplit[4].replace(/\D/g, ''));

        $(window).on('mousemove', function (e) {
            var offX = e.pageX - elCentreX;
            var offY = e.pageY - elCentreY;

            var newShDepthX = -Math.round(offX.map(0, viewportWidth / 2, 0, elShDpthX) * 7) + 2 + 'px';
            var newShDepthY = -Math.round(offY.map(0, viewportHeight / 2, 0, elShDpthY) * 7) + 2 + 'px';
            var newShadow = [newShDepthX, newShDepthY, elShadowSplit[5], elShadowColor];
            $(el).css('text-shadow', newShadow.join(' '));

            console.log(newShDepthX, newShDepthY)
        });

    });

});

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}




