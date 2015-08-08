$(document).mousemove(function(e){
		$("#cursor").css({left:e.pageX, top:e.pageY});
});

$("#area").mouseenter(function() {
    $("#cursor").hide();
});

$("#area").mouseleave(function() {
    $("#cursor").show();
});

var alert = {
	body: '<div style="text-align:center"><h1 style="color:orange; font-family: \'Indie Flower\', cursive; font-size:40px">Contact Information</h1><br/><p style="color:orange; font-family: \'Indie Flower\', cursive; font-size: 25px;">You can e-mail me at<p style="font-size: 30px; color:orange; font-family: \'Indie Flower\', cursive;"> dor.rondel@gmail.com</p></p></div>',
	buttons: {
		action: {
			title: 'Dismiss',
			fn: basicModal.close
		}
	}
}
document.querySelector('a.alert').addEventListener('click', function() { basicModal.show(alert) })
