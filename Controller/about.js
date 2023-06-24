//Click requirement for emphasis on menu
var click = 0;
$("#icon-menu").click(function () {
  click++;
  if (click == 1) {
	$(".overlay").css("opacity", "40%");
    $(".overlay").css("transition", "0.4s");
	$(".overlay").css("z-index", "-1");
    }

  else {
	$(".overlay").css("opacity", "100%");
    $(".overlay").css("transition", "1s");
	$(".overlay").css("z-index", "2");

    click = 0;
  }
});
