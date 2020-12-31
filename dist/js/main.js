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
    });
    $(".toggle-fullscreen").on("click",function()
    {
$(this).toggleClass("full-screen");
if($(this).hasClass('full-screen'))
{
    openFullscreen();

}
else
{
    closeFullscreen()
}




    });
});
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.requestFullscreen) { /* IE11 */
    elem.requestFullscreen();
  }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.exitFullscreen) { /* IE11 */
      document.exitFullscreen();
    }
  }

 
 