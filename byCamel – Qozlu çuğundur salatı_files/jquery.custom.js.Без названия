jQuery(document).ready(function ($) {

	$( ".instructions strong" ).text(function (_,txt) {
		var stepNum = txt.slice(0, -1);
		if ($.isNumeric(stepNum))
			return stepNum;
		else
			return txt;
	});

	$( ".instructions strong" ).each(function() {
		stepNum = $(this).text();
		if ($.isNumeric(stepNum)) {
			//$(this).remove();
			$(this).replaceWith("<div class='hline'></div><strong class='steps'>"+stepNum+"</strong>");
			//$(this).addClass("steps");
		}
	});

	//$( ".instructions .steps").css( "font", "italic 40px/1 Georgia" );


	// $(function() {
	// 	$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
	// 	if (!$.browser.device) {
	// 		var aside = document.getElementById('adsblock');
	// 		if (aside != null) {
	// 			var HTMLtop = document.documentElement.getBoundingClientRect().top,
	// 		    t0 = aside.getBoundingClientRect().top - HTMLtop,
	// 		    t2 = document.getElementById('endstiky').getBoundingClientRect().bottom - HTMLtop - aside.offsetHeight;
	// 		    docHeight = $(document).height();
	// 		    $(window).scroll(function() { 
	// 		    	if (docHeight > 4000) {
	// 		    		if (window.pageYOffset > t2) {
	// 		            	aside.className = 'stophere';
	// 		            	aside.style.top = t2 - t0 + 'px';
	// 			        } 
	// 			        else {
	// 			            aside.className = (t0 < window.pageYOffset ? 'stiky' : 'widget');
	// 			            aside.style.top = '0';
	// 			        }
	// 		    	}
	// 		    });
	// 		}
	// 	}
	// });	

	
});
