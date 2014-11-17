
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
	$(".cash-mask").mask("$ 99?999",{placeholder:" "});
	$(".time-mask").mask("?99:99",{placeholder:"0"});
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

$(document).ready(function(){
	addInputMasks();
	criateDial();

	displayTime = 55;
	var d = new Date();
	countDown = function(message){
		displayTime--;
		if(displayTime < 50){
			$('.new-task .box').removeClass('blue').addClass('red');
		}
		d.setTime(displayTime*1000);
		$('.txt-time').val(d.getMinutes()+':'+d.getSeconds());
		$('.progress-bar .fill').width(displayTime+'%');
		$('.fill .txt-budget').val("$ "+displayTime);
		$('.dial').val(displayTime).trigger('change');

		if (displayTime == 0){
			clearInterval(timer);
			// alert("Times Up!");
		}
	}
	timer = setInterval(countDown, 1000);
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
