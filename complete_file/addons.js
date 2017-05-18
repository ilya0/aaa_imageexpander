console.log("addons loaded");

var buttonpressed = "none";

$(document).ready(function () {


    function hideexcept() {
        alert("hiding all except " + buttonpressed);
        $(buttonpressed).not(".banner").hide();

    }





    $(".button").click(function () {
        buttonpressed = $(this).attr('filtertype')

        hideexcept();
    });







});