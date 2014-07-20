$(document).ready(function () {
	$(".bt-menu").click(function(){
		$(".menu").addClass("show");	
		$(".logo").addClass("grey");	
	});
	$(".bt-close").click(function(){
		$(".menu").removeClass("show");	
		setTimeout(function() {
			$(".logo").removeClass("grey");
		}, 800);
	});

	$(".menu a, .logo").click(function(e){
		var page = e.currentTarget.hash;
		page = page.replace('#','');

		if(!$('.current').hasClass(page)){
			if(page != "log-out"){
				$(".menu").removeClass("show");	
				$(".logo").removeClass("grey");	

				$(".current").removeClass("current").addClass("older");
				$(".page."+page).addClass("next");
				setTimeout(function() {
					$(".next").removeClass("next").addClass("current");
					$(".older").removeClass("older");
				}, 1500);
			}
		}
		return false;
	});
})