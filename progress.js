
$(document).ready(function(){
    
	// direct functie oproepen
    //setChapters();

    // bij scroll deze functies uitvoeren
	window.onscroll = function () {
        setProgress();
		hidenotes();
        setChapters();
	}

    // bij resize ook deze functies uitvoeren
    window.onresize = function () {
        setProgress();
        setChapters();
		hidenotes();
	}
    
	// progresbalk berekenen
    function setProgress(){
        var scrOfY = 0;
		if( typeof( window.pageYOffset ) == 'number' ) {
			//Netscape compliant
			scrOfY = window.pageYOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
		}
        
		//scherm hoogte en pagina hoogte opvragen
        var wHeight = $(window).height();
		var tHeight = $('html').height();

		//hoogte berekenen van scroll progress
        var sum = 50 + ((wHeight-50) * (scrOfY/(tHeight-wHeight)));

		$("#progress").height(sum);
		
		//console.log("window:" + wHeight + " total:" + tHeight + " scroll:" + scrOfY + " sum:" + sum);
    }
    
    function setChapters(){
        
		//hoogtes van hoofdstukken berekenen om zijbalk bij te werken
        var $h1_1_top = Math.round(50 + (($(window).height()-50) * ($('#h-first').position().top/($('html').height()-$(window).height()))));
        //css aanpassen
		$('#chapterone').css('top', ($h1_1_top));
        
        var $h1_2_top = Math.round(50 + (($(window).height()-50) * ($('#h-second').position().top/($('html').height()-$(window).height()))));
        $('#chaptertwo').css('top', ($h1_2_top));
        
        var $h1_3_top = Math.round(50 + (($(window).height()-50) * ($('#h-third').position().top/($('html').height()-$(window).height()))));
        $('#chapterthree').css('top', ($h1_3_top));
		
		var $h1_4_top = Math.round(50 + (($(window).height()-50) * ($('#h-fourth').position().top/($('html').height()-$(window).height()))));
        $('#chapterfour').css('top', ($h1_4_top));
		
		var $h1_5_top = Math.round(50 + (($(window).height()-50) * ($('#h-fifth').position().top/($('html').height()-$(window).height()))));
        $('#chapterfive').css('top', ($h1_5_top));
        
        //console.log($h1_1_top);

   
       // var $h1_1_top = (100 / ($('html').height() / $('#h-first').position().top)) / 100;
       // $('#chapterone').css('top', (($(window).height() * $h1_1_top) + 30));
        
    }
  
});