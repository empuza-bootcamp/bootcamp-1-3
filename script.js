$(document).ready(function () {
        var button = $("button");
        var hidden = $(".hidden");

        button.on("click", function(){
			if(hidden.is(":hidden")){
				hidden.slideDown(500);
			} else {
				hidden.slideUp(500);
			}
        });

});
