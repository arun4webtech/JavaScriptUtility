function getParameterByName(name, url) { 
	if (!url) { 
		url = window.location.href; 
	} 
	name = name.replace(/[\[\]]/g, "\\$&"); 
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
	results = regex.exec(url); 
	if (!results) 
		return null; 
	if (!results[2]) 
		return ''; 
	return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}



function isIE()
{
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	if(rv == -1)
		rv = false;
	return rv;
}
