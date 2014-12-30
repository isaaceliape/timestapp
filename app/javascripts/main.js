
var criateDial = function(){
	$(".dial")
		.knob({
			 // readOnly : true,
			'width'     : 210,
			'height'    : 210,
			'readOnly'  : true,
			'lineCap'   : 'round',
			'thickness' : '.15',
			'fgColor'   : 'white',
			'bgColor'   : 'transparent',
			'rotation'  : 'anticlockwise',
			'displayInput' : false
		});
};

var addInputMasks = function () {
	$(".cash-mask").mask("$ ?99999",{placeholder:" "});
	$(".time-mask").mask("?99",{placeholder:" "});
};

var openMenu = function(){
	$(".menu").addClass("show");	
	$(".logo").addClass("grey");
};

var closeMenu = function() {
	$(".menu").removeClass("show");	

	setTimeout(function() {
		$(".logo").removeClass("grey");
	}, 800);
};

var changePage = function(e, hash){
	var page;
	if(hash){
		page = hash;
	}else{
		page = e.currentTarget.hash;
	}

	page = page.replace('#','');


	if(!$('.current').hasClass(page)){
		if(page !== "log-out"){
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
};

var initTaskSlider = function() {
	var totalOfTaks = $('.content-tasks .mini-box').length;
	var sizeOfMinibox = $('.content-tasks .mini-box').width();
	var miniboxMargin = 80;
	var excess = 80;
	$('.content-tasks').width((sizeOfMinibox + miniboxMargin) * totalOfTaks + excess);
}

$(document).ready(function(){
	addInputMasks();
	criateDial();

	var estimatedHours = 0;
	var	time  = new Date("July 1, 1987 00:00:00");
	var valor = 0;

	var fill         = $('.progress-bar .fill');
	var budget       = $('.fill .txt-budget');
	var initalbudget = 0;
	var dial         = $('.dial');
	var timer        = $('.txt-timer');
	var box  	       = $('.new-task .box');
	
	countDown = function(message){
		var secondsElapsed = (time.getHours()*60*60)+(time.getMinutes()*60)+time.getSeconds();
		var initialSeconds = estimatedHours*60*60;
		
		if (secondsElapsed > 0){

			time.setSeconds(time.getSeconds() - 1*60*2);
			console.log(initialSeconds+" x "+secondsElapsed);
			
			if(secondsElapsed < initialSeconds/2){
				box.removeClass('blue').addClass('red');
			}
			
			timer.val(time.getHours());
			fill.width(100*secondsElapsed/(estimatedHours*60*60)+'%');
			budget.val("$ "+Math.floor(valor/initialSeconds*secondsElapsed));
			console.log(valor/initialSeconds*secondsElapsed);
			dial.val(100*secondsElapsed/(estimatedHours*60*60)).trigger('change');

		}else{

			$('.new-task .box').addClass('black');
			time.setSeconds(time.getSeconds() + 1*60);
			console.log(initialSeconds+" x "+secondsElapsed);
			
			timer.val(time.getHours());
			fill.width(100*secondsElapsed*(estimatedHours*60*60)+'%');
			budget.val("- $ "+Math.floor(valor/initialSeconds*secondsElapsed));
			dial.val(100*secondsElapsed/(estimatedHours*60*60)).trigger('change');

		}
	}
	
	$(".bt-play").click(function() {
		initalbudget = $('.fill .txt-budget').val();
		estimatedHours = Number($(".txt-timer").val());
		time.setMilliseconds(estimatedHours*60*60*1000);
		console.log(time.getHours());
		valor = Number($(".txt-budget").val().split(" ")[1]);
		interval = setInterval(countDown, 1000);
	})

	initTaskSlider();
});

// BIND EVENTS
$(".menu a, .logo").click(function(e){changePage(e);return false;});
$(".bt-menu").click(openMenu);
$(".menu .bt-close").click(closeMenu);
$(".tasks .first").click(function() {
	changePage(null, '#new-task');
});

// $(".login-form").submit(function(event){
// 	event.preventDefault();
//   var user = $(this).find( "input[name='txt-username']" ).val();
//   var pass = $(this).find( "input[name='txt-password']" ).val();
	
// 	// Send the data using post
// 	var posting = $.post( 'login.php', { 'txt-username': user, 'txt-password': pass} );

// 	// Put the results in a div
// 	posting.done(function( data ) {
// 		if (data.success === "logado!"){
// 			console.log("sucesso ao logar!");
// 			location.reload();
// 		}else{
// 			console.log("erro ao logar!");
// 		}
// 	});
// })
