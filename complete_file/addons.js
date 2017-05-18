console.log("addons loaded");



$(document).ready(function () {


    function showbanner() {
        console.log("show banners hit")
        $(".gridder-list").not(".banner").hide();
    }








    $(".button").click(function () {
        var buttonpressed = buttonid.val();
        alert("button" + buttonpressed);



    });
});