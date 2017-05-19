console.log("addons loaded");
var buttonpressed = "none";
$(document).ready(function () {


    function hideexcept() {
        // alert("hiding all except " + buttonpressed);
        $(".gridder-list").not(buttonpressed).hide();
        $(buttonpressed).show();
    }

    function showall() {
        $(".gridder-list").show();
    }

    function currentmenu() {
        $(".button").removeClass("current-menu-item");
        $(buttonpressed).addClass("current-menu-item")
    }





    $(".button").click(function () {
        if ($(this).attr('filtertype') == "showall") {
            showall();
        } else {
            buttonpressed = $(this).attr('filtertype');
            hideexcept();
        }
        currentmenu();
    });







});