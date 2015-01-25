
$(document).ready(function(){
    
    setChapters();

    
	window.onscroll = function () {
        setProgress();
		hidenotes();
        setChapters();
	}
    
    window.onresize = function () {
        setProgress();
        setChapters();
		hidenotes();
	}
    
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
        
        var wHeight = $(window).height();
		var tHeight = $('html').height();

		//var sum = (wHeight/tHeight) * scrOfY + 50;
        var sum = 50 + ((wHeight-50) * (scrOfY/(tHeight-wHeight)));

		$("#progress").height(sum);
		
		//console.log("window:" + wHeight + " total:" + tHeight + " scroll:" + scrOfY + " sum:" + sum);
    }
    
    function setChapters(){
        
        var $h1_1_top = Math.round(50 + (($(window).height()-50) * ($('#h-first').position().top/($('html').height()-$(window).height()))));
        $('#chapterone').css('top', ($h1_1_top));
        
        var $h1_2_top = Math.round(50 + (($(window).height()-50) * ($('#h-second').position().top/($('html').height()-$(window).height()))));
        $('#chaptertwo').css('top', ($h1_2_top));
        
        var $h1_3_top = Math.round(50 + (($(window).height()-50) * ($('#h-third').position().top/($('html').height()-$(window).height()))));
        $('#chapterthree').css('top', ($h1_3_top));
        
        //console.log($h1_1_top);

   
       // var $h1_1_top = (100 / ($('html').height() / $('#h-first').position().top)) / 100;
       // $('#chapterone').css('top', (($(window).height() * $h1_1_top) + 30));
        
    }
  
});