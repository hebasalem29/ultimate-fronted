$(function()
{
    "use strict";
    $(".toggle-sidebar").on("click",function()
    {
        $(".content-bar, .sidebar").toggleClass("no-sidebar");
    });
    $(".toggle-submenue").on("click",function()
    {
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).next(".child-links").toggleClass("hide");
    })
})