$(function() {
    // Deck initialization
	$.deck('.slide');
	
    hljs.tabReplace = '  ';
    hljs.initHighlightingOnLoad();
  
    //window.setInterval("$.deck('next')",10000);
    
});

//$(document).bind('deck.change', function(event, from, to) {
//    if(to === 5) {
//        setTimeout("$.deck('go', 0)", 10000);
//    }
//});
