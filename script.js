$(document).ready(function () {
        var button = $("button");
        var hidden = $(".hidden");

        button.on("click", function(){
			hidden.slideToggle();
        });

});
