/* ÖÐÎÄ */


(function($) {
	$.fn.banScroll = function(settings) {

		settings = jQuery.extend({
			numSize:0,
			numBgColor:'#cccccc',
			numBgActiveColor:'#CB9B27',
			numBgActiveImg:'',
			numFontColor:'#ffffff',
			numFontActiveColor:'#ffffff',
			blockWidth:960,
			blockHeight:90,
			numBorder:''
		},settings);


		var jQueryMatchedObj = this;
		var _int = null;
		var _ci = 0;
		var _count = 0;


		function _initialize() {
			_count = $(jQueryMatchedObj).find('dd').length;
			$(jQueryMatchedObj).find('dd').each(function(i){
				$(this).hover(function(){
				   _stop();
				},function(){
				   _start();
				});
			});
			$(jQueryMatchedObj).append('<div id="num1" class="num"><ul></ul></div>');

			for (var i = 1; i <= _count ; i++)
			{
				$(jQueryMatchedObj).find('#num1 ul').append('<li><a href="javascript:void(0);">'+i+'</a></li>');
			}

			$(jQueryMatchedObj).find('.num ul li').each(function(i){
				$(this).attr('i',i);
				$(this).hover(function(){
				   _show($(this).attr('i'));
				},function(){
				});
			});
			_css();
			_start();
		}

		function _css(){
			$(jQueryMatchedObj).css({"height":settings.blockHeight+"px","width":settings.blockWidth+"px","overflow":"hidden","position":"relative"});
			$(jQueryMatchedObj).find("dl dd").css({"position":"absolute","left":"0px","top":"0px"});
			$(jQueryMatchedObj).find(".num").css({"z-index":"99999","position":"absolute","right":"10px","bottom":"6px"});
			$(jQueryMatchedObj).find(".num ul li").css({"text-align":"center","line-height":settings.numSize+"px","display":"inline","float":"left","width":settings.numSize+"px","height":settings.numSize+"px","background":settings.numBgColor,"margin-left":"2px"});

			$(jQueryMatchedObj).find(".num ul li").css({'border':settings.numBorder});

			$(jQueryMatchedObj).find(".num ul li a").css({"color":settings.numFontColor});
			if (settings.numBgActiveImg)
			{
				$(jQueryMatchedObj).find(".num ul li.active").css({"background":'url('+settings.numBgActiveImg+') no-repeat'});
			}else{
				$(jQueryMatchedObj).find(".num ul li.active").css({"background":settings.numBgActiveColor});
			}
			$(jQueryMatchedObj).find(".num ul li.active a").css({"color":settings.numFontActiveColor});
		}

		function _start(){
			_int = setInterval(function (){
				_ci++;
				if (_ci >= _count)
				{
					_ci=0;
				}
			    _show(_ci);
				//alert(_ci);
			},3000);
		}

		function _show(i){

                $(jQueryMatchedObj).find(".num ul li").removeClass('active');
                $(jQueryMatchedObj).find(".num ul li:eq("+i+")").addClass('active');

				_css();

				$(jQueryMatchedObj).find('dd').each(function(i){
					var oldZ = parseInt($(this).css('z-index'));
					if (isNaN(oldZ))
					{
						oldZ = 1;
					}
					oldZ -= 10;
					if (oldZ <= 1)
					{
						oldZ = 1;
					}
					//alert(oldZ);
					$(this).css('z-index',oldZ);
				});

				$(jQueryMatchedObj).find('dd:eq('+i+')').css('left',settings.blockWidth);
				$(jQueryMatchedObj).find('dd:eq('+i+')').css('z-index',999);
				$(jQueryMatchedObj).find('dd:eq('+i+')').animate({
															left: '0px'
														  }, 500, function() {
															// Animation complete.
														  });;
		}

		function _stop(){
			clearInterval(_int);
		}

		_initialize();
		_show(_ci);
	}
})(jQuery); 

