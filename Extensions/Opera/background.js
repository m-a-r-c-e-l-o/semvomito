(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-96323880-1']);
_gaq.push(['_trackPageview']);

chrome.runtime.onMessage.addListener(function( request, sender, sendResponse ) {
    if(request.action == "curado"){
        _gaq.push(['_trackEvent', 'curado', 'amem']);
    }
});
