$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			vw = $(window).width()/2;
			var windowWidth = $(window).width();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();

			// Mobile responsive resize - properly centered with padding
			if (windowWidth < 768) {
				var topPos = 150;
				var balloonWidth;
				var spacing;

				// Adjust balloon width and spacing based on screen size
				if (windowWidth <= 360) {
					balloonWidth = 40;
					spacing = 45;
				} else if (windowWidth <= 480) {
					balloonWidth = 50;
					spacing = 55;
				} else if (windowWidth <= 600) {
					balloonWidth = 60;
					spacing = 65;
				} else {
					balloonWidth = 70;
					spacing = 75;
				}

				var totalWidth = spacing * 7; // 8 balloons = 7 spaces
				var startLeft = (windowWidth - totalWidth - balloonWidth) / 2;

				$('#b11').animate({top:topPos, left: startLeft + (spacing * 0)},500);
				$('#b22').animate({top:topPos, left: startLeft + (spacing * 1)},500);
				$('#b33').animate({top:topPos, left: startLeft + (spacing * 2)},500);
				$('#b44').animate({top:topPos, left: startLeft + (spacing * 3)},500);
				$('#b55').animate({top:topPos, left: startLeft + (spacing * 4)},500);
				$('#b66').animate({top:topPos, left: startLeft + (spacing * 5)},500);
				$('#b77').animate({top:topPos, left: startLeft + (spacing * 6)},500);
				$('#b88').animate({top:topPos, left: startLeft + (spacing * 7)},500);
			} else {
				$('#b11').animate({top:240, left: vw-400},500);
				$('#b22').animate({top:240, left: vw-300},500);
				$('#b33').animate({top:240, left: vw-200},500);
				$('#b44').animate({top:240, left: vw-100},500);
				$('#b55').animate({top:240, left: vw},500);
				$('#b66').animate({top:240, left: vw+100},500);
				$('#b77').animate({top:240, left: vw+200},500);
				$('#b88').animate({top:240, left: vw+300},500);
			}
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');

		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');

		// Show the album photos
		$('.album-photo').fadeIn('slow');

		});
	});

	// Mobile responsive balloon animation - uses window width
	function getMaxBalloonWidth() {
		var windowWidth = $(window).width();
		// Use 80% of window width for mobile, full 1000px for desktop
		return windowWidth < 768 ? windowWidth * 0.8 : 1000;
	}

	function getMaxBalloonHeight() {
		var windowHeight = $(window).height();
		// Adjust height based on screen size
		return windowHeight < 768 ? windowHeight * 0.5 : 500;
	}

	function loopOne() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var maxWidth = getMaxBalloonWidth();
		var maxHeight = getMaxBalloonHeight();
		var randleft = maxWidth * Math.random();
		var randtop = maxHeight * Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();

		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width()/2;
		var windowWidth = $(window).width();

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')

		// Mobile responsive balloon spacing - properly centered with padding
		if (windowWidth < 768) {
			var topPos = 150;
			var balloonWidth;
			var spacing;

			// Adjust balloon width and spacing based on screen size
			if (windowWidth <= 360) {
				balloonWidth = 40;
				spacing = 45;
			} else if (windowWidth <= 480) {
				balloonWidth = 50;
				spacing = 55;
			} else if (windowWidth <= 600) {
				balloonWidth = 60;
				spacing = 65;
			} else {
				balloonWidth = 70;
				spacing = 75;
			}

			var totalWidth = spacing * 7; // 8 balloons = 7 spaces
			var startLeft = (windowWidth - totalWidth - balloonWidth) / 2;

			// Position balloons with proper spacing
			$('#b11').animate({top:topPos, left: startLeft + (spacing * 0)},500);
			$('#b22').animate({top:topPos, left: startLeft + (spacing * 1)},500);
			$('#b33').animate({top:topPos, left: startLeft + (spacing * 2)},500);
			$('#b44').animate({top:topPos, left: startLeft + (spacing * 3)},500);
			$('#b55').animate({top:topPos, left: startLeft + (spacing * 4)},500);
			$('#b66').animate({top:topPos, left: startLeft + (spacing * 5)},500);
			$('#b77').animate({top:topPos, left: startLeft + (spacing * 6)},500);
			$('#b88').animate({top:topPos, left: startLeft + (spacing * 7)},500);
		} else {
			// Desktop: Original spacing with 8 balloons
			$('#b11').animate({top:240, left: vw-400},500);
			$('#b22').animate({top:240, left: vw-300},500);
			$('#b33').animate({top:240, left: vw-200},500);
			$('#b44').animate({top:240, left: vw-100},500);
			$('#b55').animate({top:240, left: vw},500);
			$('#b66').animate({top:240, left: vw+100},500);
			$('#b77').animate({top:240, left: vw+200},500);
			$('#b88').animate({top:240, left: vw+300},500);
		}

		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var $messages = $(".message p");   // only inside .message
		var totalMessages = $messages.length;

		function msgLoop(i) {
			if (i < totalMessages - 1) {
				$messages.eq(i).fadeIn('slow').delay(1500).fadeOut('slow').promise().done(function(){
					msgLoop(i + 1);
				});
			} else {
				// Last message stays + cake comes back + show "Our memories" button
				$messages.eq(i).fadeIn('slow').promise().done(function(){
					$('.cake').fadeIn('fast');
					// Show "Our memories" button after last message
					$('#our_memories').fadeIn('slow');
				});
			}
		}

		msgLoop(0);
	});

	// Our memories button - open last.html page with audio trigger
	$('#our_memories').click(function(){
		// Store flag in sessionStorage to trigger music on next page
		sessionStorage.setItem('playMusic', 'true');
		window.location.href = 'last.html';
	});

});

// Zoom (lightbox) feature
$('.album-photo').click(function() {
    var src = $(this).attr('src');
    $('#lightbox img').attr('src', src);

    // Force flex only when showing
    $('#lightbox').css('display', 'flex').hide().fadeIn('fast');
});

// Close when clicking outside image
$('#lightbox').click(function(e) {
    if (e.target !== this) return; // only close if background clicked
    $('#lightbox').fadeOut('fast');
});




//alert('hello');