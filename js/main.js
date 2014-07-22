$(document).ready(function () {
	// Initilize site
	initializa();

	// BIND EVENTS
	$(".menu a, .logo").click(function(e){changePage(e);return false;});
	$(".bt-menu").click(openMenu);
	$(".menu .bt-close").click(closeMenu);
	$(".tasks .first").click(function() {
		changePage(null, '#new-task');
	});
	$('.login-form').submit(function(){
		//Clear all the inputs
		$(this).children('input').each(function(){
			$(this).val('');
		});
		
		changePage(null, '#tasks');
		return false;
	});
})

var addInputMasks = function () {
	$(".cash-mask").mask("$ 99?999",{placeholder:" "});
	$(".time-mask").mask("?99:99",{placeholder:"0"});
}
var openMenu = function(){
	$(".menu").addClass("show");	
	$(".logo").addClass("grey");
}
var closeMenu = function() {
	$(".menu").removeClass("show");	
	setTimeout(function() {
		$(".logo").removeClass("grey");
	}, 800);
}
var changePage = function(e, hash){
	var page;
	if(hash){
		page = hash;
	}else{
		page = e.currentTarget.hash;
	}

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
}
var initializa = function() {
	addInputMasks();
}

