/*global $, document, setInterval, window, clearInterval, console*/

$(document).ready(function () {
    "use strict";
    // trigger niceScroll
    $("html").niceScroll({
        cursorcolor: "#f7600e",
        cursorborder: "none"
    });

    $("header").height($(window).height());

    $(".arrow").click(function () {
        $("html , body").animate({
            scrollTop: $(".features").offset().top
        }, 500)
    })
    //show the hidden works
    $("#showMore").click(function () {
        var lastChild = $(".gallary").children(".hidden").last();
        if (lastChild.hasClass("hidden")) {

            if (lastChild.siblings(".hidden").first().hasClass("hidden")) {
                lastChild.siblings(".hidden").first().fadeIn(500).removeClass("hidden")
            } else {
                lastChild.fadeIn(500).removeClass("hidden")
            }

        } else {
            $("#showMore").attr("disabled", "disabled").css({
                "background": "#aaa",
                "color": "#666",
                'border': "none",
                "cursor": "default"
            });
        }

    })

    //create testim slider
    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");

    function checkSlider() {
        $(".testim .client:last-of-type").hasClass('active') ? leftArrow.fadeOut(50) : leftArrow.fadeIn();
        $(".testim .client:first-child").hasClass('active') ? rightArrow.fadeOut(50) : rightArrow.fadeIn();
    }
    checkSlider();
    leftArrow.click(function () {
        $(".testim .active").fadeOut().removeClass("active").addClass("hidden").next().removeClass("hidden").addClass("active").fadeIn();
        checkSlider();
    })
    rightArrow.click(function () {
        $(".testim .active").fadeOut().removeClass("active").addClass("hidden").prev().removeClass("hidden").addClass("active").fadeIn();
        checkSlider();
    })
})
