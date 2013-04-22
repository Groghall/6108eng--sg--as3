$(document).ready(function(){

	var forcedaytime = 'night';
	var forcewcode = 389;
	var forcecurtemp = 40;
	var forcewindy = 'true';

	$('#weatherslider').weatherSlider();
	$('.ws-widget:eq(0)').weatherSlider({
		enableSearchField : true,
		responsive : true	
	});
	$('.ws-widget:eq(1)').weatherSlider({
		enableSearchField : true,
		enableForecast : true,
		refreshInterval : 20000,
		measurement : 'imperial',
		responsive : true
	});
	$('.ws-widget:eq(2)').weatherSlider({
		enableSearchField : true,
		slideDelay : 10000,
		timeFormat : 24,
		responsive : true		
	});
	$('.ws-widget:eq(3)').weatherSlider({
		enableSearchField : true,
		enableForecast : true,
		timeFormat : 24,
		measurement : 'imperial',
		showHum : true,
		showPrec : true,
		showWind : true,
		showPress : true,
		showVis : true,
		responsive : true		
	});
	customWeather();

	var isOldIE = $.browser.msie && $.browser.version < 9 ? true : false;

	$('.ws-ex').live('click',function(e){
		e.preventDefault();

		if(!$(this).parent().hasClass('ws-active')){

			if( !isOldIE ){
				var a = $('.examples li.ws-active').index();
				for(var x=0;x<$('.ws-example').length;x++){
					if( x != a ){
						$('.ws-ex-inner:eq('+x+')').css({
							visibility : 'hidden',
							opacity : 0
						});
					}
				}
				var w = $('#ws-examples').width();
				var l = parseInt($('#ws-examples .inner').css('left'));

				var fadeOut =  ( ( w - l ) / w ) - 1;
				var fadeIn =  Math.abs(parseInt($(this).attr('href')));

				$('#ws-examples .inner .ws-example:eq('+fadeOut+') .ws-ex-inner').fadeTo(500, 0, 'easeInQuad', function(){
					$(this).css({
						visibility : 'hidden'
					});
				});

				$('#ws-examples .inner .ws-example:eq('+fadeIn+') .ws-ex-inner').css({
					visibility : 'visible'
				}).delay(750).fadeTo(500, 1, 'easeInQuad');				
			}

			$('li').removeClass('ws-active');
			$(this).parent().addClass('ws-active');

			$('#ws-examples .inner').stop().animate({
				left : ( parseInt( $(this).attr('href') ) * $('#ws-examples').width() ) + 'px'
			}, 1500, 'easeInOutQuart');						
		}
	});

	$('input[name="forcedaytime"]').click(function(){
		forcedaytime = $(this).attr('value');		
		customWeather();
	});
	$('input[name="forcewcode"]').click(function(){
		forcewcode = $(this).attr('value');		
		customWeather();
	});
	$('input[name="forcecurtemp"]').click(function(){
		forcecurtemp = $(this).attr('value');		
		customWeather();
	});
	$('input[name="forcewindy"]').click(function(){
		forcewindy = $(this).attr('value');		
		customWeather();
	});

	function customWeather(){

		$('#ws-weathers *').stop().remove();

		$('#ws-weathers').weatherSlider({
			enableSearchField : true,
			enableWeatherInfo : true,
			locations : ['Wallasey, UK'],
			forcedaytime : forcedaytime,
			forcewcode : forcewcode,
			forcecurtemp : forcecurtemp,
			forcewindy : forcewindy == 'true' ? true : false
		});
	}
	$.weatherSlider.options = {
		
		// User settings (can be modified)

		imgPath				: '..images/',

		CSSanimations		: true,
		JSanimations		: true,
		snow				: true,
		rain				: true,
		wind				: true,
		lightnings			: true,

		windyWeather		: 18,
		windDirection		: 'auto',
		icyTemp				: -2,

		measurement			: 'metric',
		daytime				: [7,19],

		infoDuration		: 450,
		infoEasingType		: ['easeOutBack','easeInBack'],

		reduction			: 'auto',
		keybNav				: true,
		touchNav			: true,
		
		// NEW FEATURES v2.0

		responsive			: true,
		enableSearchField	: true,
		enableWeatherInfo	: true,
		enableForecast		: true,
		slideDelay			: 0,
		refreshInterval		: 0,
		timeFormat			: 12,

		// Show or hide current weather data
		
		showLoc				: true,
		showTime			: true,
		showCond			: true,
		showTemp			: true,
		showLow				: true,
		showHigh			: true,
		showHum				: true,
		showPrec			: true,
		showWind			: true,
		showPress			: true,
		showVis				: true,

		// Show or hide 3 days forecast weather data

		showFDay			: true,
		showFCond			: true,
		showFLow			: true,
		showFHigh			: true,

		// NEW FEATURES v2.1

		// Show or hide background image

		hideBackground		: false,
		
		// NEW FEATURES v2.2

		alwaysShowForecast	: false,
		alwaysShowSearch	: false,

		// Important! You must sign up to get your own WorlWeatherOnline API key!
		// Please do NOT use our API key, except for testing only!
		// The registraion for your API key is free:
		// http://www.worldweatheronline.com/register.aspx

		WWOAPIKey			: 'qm7tqu2c5j5r84qvfz7qkman'
	};

})(jQuery);
});
